import os
from pathlib import Path
from typing import List, Set

class CodeDocumentationGenerator:
    def __init__(self, root_path: str, output_file: str = "frontend_documentation.md"):
        self.root_path = Path(root_path)
        self.output_file = output_file
        
        # Define files/folders to skip
        self.skip_folders = {
            'node_modules', '.git', 'dist', 'build', '.next', 
            'coverage', '.vscode', '.idea', 'public'
        }
        
        self.skip_files = {
            'bun.lockb', 'package-lock.json', 'yarn.lock', 
            '.gitignore', 'robots.txt', 'favicon.ico',
            'components.json', 'README.md'
        }
        
        # Skip UI component library files (shadcn/ui components)
        self.skip_ui_components = {
            'accordion.tsx', 'alert-dialog.tsx', 'alert.tsx', 'aspect-ratio.tsx',
            'avatar.tsx', 'badge.tsx', 'breadcrumb.tsx', 'button.tsx',
            'calendar.tsx', 'card.tsx', 'carousel.tsx', 'chart.tsx',
            'checkbox.tsx', 'collapsible.tsx', 'command.tsx', 'context-menu.tsx',
            'dialog.tsx', 'drawer.tsx', 'dropdown-menu.tsx', 'form.tsx',
            'hover-card.tsx', 'input-otp.tsx', 'input.tsx', 'label.tsx',
            'menubar.tsx', 'navigation-menu.tsx', 'pagination.tsx', 'popover.tsx',
            'progress.tsx', 'radio-group.tsx', 'resizable.tsx', 'scroll-area.tsx',
            'select.tsx', 'separator.tsx', 'sheet.tsx', 'sidebar.tsx',
            'skeleton.tsx', 'slider.tsx', 'sonner.tsx', 'switch.tsx',
            'table.tsx', 'tabs.tsx', 'textarea.tsx', 'toggle-group.tsx',
            'toggle.tsx', 'tooltip.tsx', 'toaster.tsx', 'use-toast.ts'
        }
        
        # Define important file extensions
        self.important_extensions = {
            '.ts', '.tsx', '.js', '.jsx', '.css', '.scss', 
            '.json', '.env', '.env.example'
        }
        
        # Files to definitely include
        self.must_include_files = {
            'package.json', 'tsconfig.json', 'vite.config.ts', 
            'tailwind.config.ts', 'postcss.config.js'
        }

    def should_include_file(self, file_path: Path) -> bool:
        """Determine if a file should be included in documentation"""
        file_name = file_path.name
        
        # Skip if in skip list
        if file_name in self.skip_files:
            return False
        
        # Skip UI component library files
        if file_name in self.skip_ui_components:
            return False
        
        # Include must-have files
        if file_name in self.must_include_files:
            return True
        
        # Check extension
        return file_path.suffix in self.important_extensions

    def get_language_from_extension(self, file_path: Path) -> str:
        """Get the markdown language identifier from file extension"""
        extension_map = {
            '.ts': 'typescript',
            '.tsx': 'tsx',
            '.js': 'javascript',
            '.jsx': 'jsx',
            '.json': 'json',
            '.css': 'css',
            '.scss': 'scss',
            '.html': 'html',
            '.md': 'markdown',
            '.env': 'bash',
            '.sh': 'bash',
            '.yml': 'yaml',
            '.yaml': 'yaml'
        }
        return extension_map.get(file_path.suffix, 'text')

    def collect_files(self) -> List[Path]:
        """Collect all files to be documented"""
        files_to_document = []
        
        for file_path in self.root_path.rglob('*'):
            # Skip directories
            if file_path.is_dir():
                continue
            
            # Skip if in excluded folders
            if any(skip_folder in file_path.parts for skip_folder in self.skip_folders):
                continue
            
            # Check if file should be included
            if self.should_include_file(file_path):
                files_to_document.append(file_path)
        
        # Sort files for better organization
        files_to_document.sort(key=lambda x: (
            # Sort by directory depth first
            len(x.parts),
            # Then alphabetically
            str(x)
        ))
        
        return files_to_document

    def generate_toc(self, files: List[Path]) -> str:
        """Generate table of contents"""
        toc = ["## 📚 Table of Contents\n\n"]
        
        # Group files by directory
        grouped_files = {}
        for file_path in files:
            relative_path = file_path.relative_to(self.root_path)
            dir_path = relative_path.parent
            
            if dir_path not in grouped_files:
                grouped_files[dir_path] = []
            grouped_files[dir_path].append(relative_path)
        
        # Generate TOC
        for dir_path in sorted(grouped_files.keys()):
            if str(dir_path) == '.':
                toc.append("### 📁 Root Files\n")
            else:
                toc.append(f"### 📁 {dir_path}\n")
            
            for file_path in grouped_files[dir_path]:
                anchor = str(file_path).replace('/', '-').replace('\\', '-').replace('.', '')
                toc.append(f"- [{file_path.name}](#{anchor})\n")
            
            toc.append("\n")
        
        return "".join(toc)

    def read_file_content(self, file_path: Path) -> str:
        """Read file content safely"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                return f.read()
        except UnicodeDecodeError:
            try:
                with open(file_path, 'r', encoding='latin-1') as f:
                    return f.read()
            except:
                return "⚠️ Could not read file (encoding issue)"
        except Exception as e:
            return f"⚠️ Error reading file: {str(e)}"

    def generate_documentation(self):
        """Generate the complete documentation"""
        print(f"🔍 Scanning directory: {self.root_path}")
        
        # Collect files
        files = self.collect_files()
        print(f"📊 Found {len(files)} important files to document")
        
        # Start building documentation
        doc_content = []
        
        # Add header
        doc_content.append("# 📖 Frontend Project Documentation\n\n")
        doc_content.append(f"Generated from: `{self.root_path}`\n\n")
        doc_content.append("---\n\n")
        
        # Add table of contents
        doc_content.append(self.generate_toc(files))
        doc_content.append("---\n\n")
        
        # Add file contents
        doc_content.append("## 📝 Source Code\n\n")
        
        current_directory = None
        for file_path in files:
            relative_path = file_path.relative_to(self.root_path)
            dir_path = relative_path.parent
            
            # Add directory header if changed
            if dir_path != current_directory:
                current_directory = dir_path
                if str(dir_path) == '.':
                    doc_content.append("### 📁 Root Files\n\n")
                else:
                    doc_content.append(f"### 📁 {dir_path}\n\n")
            
            # Add file header with anchor
            anchor = str(relative_path).replace('/', '-').replace('\\', '-').replace('.', '')
            doc_content.append(f"#### 📄 {relative_path}\n")
            doc_content.append(f"<a name='{anchor}'></a>\n\n")
            
            # Add file path
            doc_content.append(f"**Path:** `{relative_path}`\n\n")
            
            # Add file content
            content = self.read_file_content(file_path)
            language = self.get_language_from_extension(file_path)
            
            doc_content.append(f"```{language}\n")
            doc_content.append(content)
            if not content.endswith('\n'):
                doc_content.append('\n')
            doc_content.append("```\n\n")
            doc_content.append("---\n\n")
        
        # Write to output file
        output_path = Path(self.output_file)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("".join(doc_content))
        
        print(f"✅ Documentation generated successfully!")
        print(f"📄 Output file: {output_path.absolute()}")
        print(f"📏 File size: {output_path.stat().st_size / 1024:.2f} KB")

def main():
    # Configuration
    PROJECT_ROOT = "."  # Change this to your project path
    OUTPUT_FILE = "frontend_documentation.md"  # Output file name
    
    # Create generator and run
    generator = CodeDocumentationGenerator(
        root_path=PROJECT_ROOT,
        output_file=OUTPUT_FILE
    )
    
    generator.generate_documentation()

if __name__ == "__main__":
    main()
