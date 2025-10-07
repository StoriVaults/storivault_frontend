import os
import json
from pathlib import Path
from typing import List, Set, Dict, Optional
from datetime import datetime

class FrontendDocumentationGenerator:
    def __init__(self, root_dir: str, output_file: str = "frontend_documentation.md"):
        self.root_dir = Path(root_dir)
        self.output_file = output_file
        
        # Define folders to skip
        self.skip_folders = {
            'node_modules', '.git', 'dist', 'build', '.next', '.nuxt',
            'coverage', '.nyc_output', 'out', '.cache', '.parcel-cache',
            '.vscode', '.idea', '__pycache__', '.pytest_cache',
            '.turbo', '.vercel', '.netlify', 'storybook-static'
        }
        
        # Define file extensions and names to skip
        self.skip_files = {
            '.map', '.lock', '.log', '.pid', '.seed', '.pid.lock',
            '.DS_Store', 'Thumbs.db', '.env.local', '.env.production',
            'npm-debug.log', 'yarn-debug.log', 'yarn-error.log',
            'lerna-debug.log', '.pnpm-debug.log', 'bun.lockb',
            'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml'
        }
        
        # Define important config files to always include
        self.important_configs = {
            'package.json', 'tsconfig.json', 'vite.config.ts', 
            'tailwind.config.ts', 'postcss.config.js', 'vercel.json',
            'next.config.js', 'webpack.config.js', '.env.example',
            'eslint.config.js', 'components.json', 'tsconfig.app.json',
            'tsconfig.node.json', '.env'
        }
        
        # Define code file extensions to include
        self.code_extensions = {
            '.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.sass',
            '.json', '.html', '.svg', '.md', '.yml', '.yaml'
        }
        
        # File statistics
        self.stats = {
            'total_files': 0,
            'total_size': 0,
            'file_types': {}
        }

    def should_skip_folder(self, folder_name: str) -> bool:
        """Check if folder should be skipped"""
        return folder_name in self.skip_folders

    def should_include_file(self, file_path: Path) -> bool:
        """Check if file should be included in documentation"""
        file_name = file_path.name
        
        # Skip the output file itself
        if file_name == self.output_file:
            return False
        
        # Always include important config files
        if file_name in self.important_configs:
            return True
        
        # Skip files in skip list
        if file_name in self.skip_files or file_path.suffix in self.skip_files:
            return False
        
        # Skip binary and lock files
        if file_name.endswith('.lockb') or file_name.endswith('-lock.json'):
            return False
        
        # Include files with accepted extensions
        if file_path.suffix in self.code_extensions:
            return True
        
        # Include specific files without extensions
        if file_name in ['Dockerfile', 'Makefile', 'LICENSE']:
            return True
        
        return False

    def get_language_identifier(self, file_path: Path) -> str:
        """Get the language identifier for syntax highlighting"""
        extension = file_path.suffix
        file_name = file_path.name
        
        language_map = {
            '.ts': 'typescript',
            '.tsx': 'tsx',
            '.js': 'javascript',
            '.jsx': 'jsx',
            '.css': 'css',
            '.scss': 'scss',
            '.sass': 'sass',
            '.json': 'json',
            '.html': 'html',
            '.svg': 'xml',
            '.md': 'markdown',
            '.yml': 'yaml',
            '.yaml': 'yaml'
        }
        
        # Special cases for specific files
        if file_name == 'Dockerfile':
            return 'dockerfile'
        elif file_name == 'Makefile':
            return 'makefile'
        elif file_name.endswith('.config.js') or file_name.endswith('.config.ts'):
            return 'javascript' if file_name.endswith('.js') else 'typescript'
        
        return language_map.get(extension, 'text')

    def read_file_safely(self, file_path: Path) -> Optional[str]:
        """Safely read file content with proper encoding handling"""
        encodings = ['utf-8', 'utf-8-sig', 'latin-1', 'cp1252']
        
        for encoding in encodings:
            try:
                with open(file_path, 'r', encoding=encoding) as f:
                    content = f.read()
                    # Update statistics
                    self.stats['total_size'] += len(content)
                    ext = file_path.suffix or 'no-ext'
                    self.stats['file_types'][ext] = self.stats['file_types'].get(ext, 0) + 1
                    return content
            except UnicodeDecodeError:
                continue
            except Exception as e:
                return f"// Error reading file: {str(e)}"
        
        return "// Could not decode file with available encodings"

    def analyze_package_json(self, root_path: Path) -> Dict:
        """Extract key information from package.json"""
        package_json_path = root_path / 'package.json'
        if package_json_path.exists():
            try:
                with open(package_json_path, 'r') as f:
                    package_data = json.load(f)
                    return {
                        'name': package_data.get('name', 'Unknown'),
                        'version': package_data.get('version', '0.0.0'),
                        'dependencies': list(package_data.get('dependencies', {}).keys()),
                        'devDependencies': list(package_data.get('devDependencies', {}).keys()),
                        'scripts': list(package_data.get('scripts', {}).keys())
                    }
            except:
                pass
        return {}

    def generate_table_of_contents(self, files: List[Path]) -> str:
        """Generate a structured table of contents"""
        toc = ["## 📑 Table of Contents\n\n"]
        
        # Group files by category
        categories = {
            'Configuration': [],
            'Source Code': {
                'Main': [],
                'APIs': [],
                'Components': [],
                'Pages': [],
                'Store': [],
                'Controllers': [],
                'Hooks': [],
                'Types': [],
                'Utils': [],
                'Helpers': [],
                'Styles': []
            },
            'Public Assets': []
        }
        
        for file_path in files:
            relative_path = file_path.relative_to(self.root_dir)
            parts = relative_path.parts
            file_name = file_path.name
            
            # Categorize files
            if len(parts) == 1:  # Root level files
                if file_path.suffix in ['.json', '.ts', '.js'] and 'config' in file_name.lower():
                    categories['Configuration'].append((file_name, relative_path))
                elif file_path.suffix == '.css':
                    categories['Source Code']['Styles'].append((file_name, relative_path))
            elif parts[0] == 'src':
                if len(parts) > 1:
                    subfolder = parts[1]
                    if subfolder == 'apis':
                        categories['Source Code']['APIs'].append((file_name, relative_path))
                    elif subfolder == 'components':
                        categories['Source Code']['Components'].append((file_name, relative_path))
                    elif subfolder == 'pages':
                        categories['Source Code']['Pages'].append((file_name, relative_path))
                    elif subfolder == 'store':
                        categories['Source Code']['Store'].append((file_name, relative_path))
                    elif subfolder == 'controllers':
                        categories['Source Code']['Controllers'].append((file_name, relative_path))
                    elif subfolder == 'hooks':
                        categories['Source Code']['Hooks'].append((file_name, relative_path))
                    elif subfolder == 'types':
                        categories['Source Code']['Types'].append((file_name, relative_path))
                    elif subfolder == 'utils':
                        categories['Source Code']['Utils'].append((file_name, relative_path))
                    elif subfolder == 'helper':
                        categories['Source Code']['Helpers'].append((file_name, relative_path))
                    else:
                        categories['Source Code']['Main'].append((file_name, relative_path))
                else:
                    categories['Source Code']['Main'].append((file_name, relative_path))
            elif parts[0] == 'public':
                categories['Public Assets'].append((file_name, relative_path))
        
        # Build TOC
        for category, items in categories.items():
            if isinstance(items, dict):
                if any(items.values()):
                    toc.append(f"### {category}\n")
                    for subcat, subitems in items.items():
                        if subitems:
                            toc.append(f"#### {subcat}\n")
                            for name, path in sorted(subitems):
                                anchor = str(path).replace('/', '-').replace('\\', '-').replace('.', '')
                                toc.append(f"- [{name}](#{anchor})\n")
                            toc.append("\n")
            elif items:
                toc.append(f"### {category}\n")
                for name, path in sorted(items):
                    anchor = str(path).replace('/', '-').replace('\\', '-').replace('.', '')
                    toc.append(f"- [{name}](#{anchor})\n")
                toc.append("\n")
        
        return "".join(toc)

    def collect_files(self) -> List[Path]:
        """Collect all files to be documented"""
        files = []
        
        for root, dirs, filenames in os.walk(self.root_dir):
            # Remove folders to skip
            dirs[:] = [d for d in dirs if not self.should_skip_folder(d)]
            
            root_path = Path(root)
            
            for filename in sorted(filenames):
                file_path = root_path / filename
                
                if self.should_include_file(file_path):
                    files.append(file_path)
                    self.stats['total_files'] += 1
        
        return sorted(files)

    def generate_documentation(self):
        """Generate the complete frontend documentation"""
        print("🔍 Scanning frontend directory...")
        files = self.collect_files()
        
        if not files:
            print("❌ No files found to document!")
            return
        
        print(f"📁 Found {len(files)} files to document")
        
        # Analyze package.json
        package_info = self.analyze_package_json(self.root_dir)
        
        with open(self.output_file, 'w', encoding='utf-8') as doc:
            # Write header
            doc.write("# 🎨 StoriVault Frontend Documentation\n\n")
            doc.write(f"**Generated on:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n")
            doc.write(f"**Project Path:** `{self.root_dir.absolute()}`  \n")
            
            if package_info:
                doc.write(f"**Project Name:** {package_info.get('name', 'N/A')}  \n")
                doc.write(f"**Version:** {package_info.get('version', 'N/A')}  \n")
            
            doc.write("\n---\n\n")
            
            # Write project overview
            doc.write("## 🚀 Project Overview\n\n")
            doc.write("**Technology Stack:**\n")
            doc.write("- **Framework:** React + TypeScript\n")
            doc.write("- **Build Tool:** Vite\n")
            doc.write("- **Styling:** Tailwind CSS\n")
            doc.write("- **UI Components:** Custom components with shadcn/ui\n")
            doc.write("- **State Management:** Zustand stores\n")
            doc.write("- **HTTP Client:** Custom API client\n\n")
            
            if package_info.get('dependencies'):
                doc.write("**Key Dependencies:**\n")
                key_deps = ['react', 'react-dom', 'react-router-dom', 'zustand', 'axios', '@tanstack/react-query']
                for dep in key_deps:
                    if dep in package_info['dependencies']:
                        doc.write(f"- {dep}\n")
                doc.write("\n")
            
            doc.write("---\n\n")
            
            # Write table of contents
            doc.write(self.generate_table_of_contents(files))
            doc.write("\n---\n\n")
            
            # Write main content
            doc.write("## 📄 Source Code\n\n")
            
            current_section = None
            for file_path in files:
                relative_path = file_path.relative_to(self.root_dir)
                parts = relative_path.parts
                
                # Add section headers
                if len(parts) > 0:
                    section = parts[0] if parts[0] != 'src' else (parts[1] if len(parts) > 1 else 'src')
                    if section != current_section:
                        current_section = section
                        doc.write(f"\n## {section.title().replace('-', ' ')} Files\n\n")
                
                # Create anchor
                anchor = str(relative_path).replace('/', '-').replace('\\', '-').replace('.', '')
                
                # Write file header
                doc.write(f"### <a id='{anchor}'></a> `{relative_path}`\n\n")
                
                # Add file description based on path
                if 'components' in str(relative_path):
                    doc.write("**Component:** ")
                elif 'pages' in str(relative_path):
                    doc.write("**Page Component:** ")
                elif 'apis' in str(relative_path):
                    doc.write("**API Module:** ")
                elif 'store' in str(relative_path):
                    doc.write("**State Store:** ")
                else:
                    doc.write("**File Type:** ")
                
                doc.write(f"{file_path.name}\n\n")
                
                # Read and write file content
                content = self.read_file_safely(file_path)
                if content:
                    language = self.get_language_identifier(file_path)
                    doc.write(f"```{language}\n")
                    doc.write(content)
                    if not content.endswith('\n'):
                        doc.write('\n')
                    doc.write("```\n\n")
                
                doc.write("---\n\n")
            
            # Write statistics
            doc.write("\n## 📊 Documentation Statistics\n\n")
            doc.write(f"- **Total Files Documented:** {self.stats['total_files']}\n")
            doc.write(f"- **Total Size:** {self.stats['total_size']:,} characters\n")
            doc.write("\n**File Type Distribution:**\n")
            for ext, count in sorted(self.stats['file_types'].items()):
                doc.write(f"- `{ext}`: {count} files\n")
            
            doc.write("\n---\n")
            doc.write("*End of Frontend Documentation*\n")
        
        print(f"✅ Documentation generated successfully!")
        print(f"📄 Output file: {self.output_file}")
        print(f"📊 Statistics:")
        print(f"   - Files documented: {self.stats['total_files']}")
        print(f"   - Total size: {os.path.getsize(self.output_file):,} bytes")

def main():
    """Main function to run the frontend documentation generator"""
    import sys
    
    # Default to current directory, or accept path as argument
    if len(sys.argv) > 1:
        frontend_path = Path(sys.argv[1])
    else:
        # Use current directory or specify your path
        frontend_path = Path.cwd()
        # frontend_path = Path("D:/NexusNao/PROJECTS/StoriVault/EDITING/frontend")
    
    # Verify path exists
    if not frontend_path.exists():
        print(f"❌ Error: Path does not exist: {frontend_path}")
        sys.exit(1)
    
    # Create generator instance
    generator = FrontendDocumentationGenerator(
        root_dir=frontend_path,
        output_file="frontend_documentation.md"
    )
    
    # Generate documentation
    print("=" * 60)
    print("📚 StoriVault Frontend Documentation Generator")
    print("=" * 60)
    print(f"📁 Source Directory: {frontend_path}")
    print("=" * 60)
    
    generator.generate_documentation()
    
    print("=" * 60)
    print("✨ Documentation generation complete!")
    print("=" * 60)

if __name__ == "__main__":
    main()
