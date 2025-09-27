'use client';

import { useCallback, useState } from 'react';
import { Upload, X, File, Image } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // in bytes
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
  value?: File | File[] | null;
  onRemove?: (index?: number) => void;
}

export function FileDropzone({
  onFileSelect,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
  disabled = false,
  multiple = false,
  value,
  onRemove,
}: FileDropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback((file: File): boolean => {
    setError(null);
    
    if (maxSize && file.size > maxSize) {
      setError(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`);
      return false;
    }

    if (accept && !accept.split(',').some(type => {
      const trimmedType = type.trim();
      if (trimmedType.endsWith('/*')) {
        return file.type.startsWith(trimmedType.slice(0, -1));
      }
      return file.type === trimmedType;
    })) {
      setError('File type not supported');
      return false;
    }

    return true;
  }, [accept, maxSize]);

  const handleFileSelect = useCallback((files: FileList) => {
    const fileArray = Array.from(files);
    
    if (multiple) {
      const validFiles = fileArray.filter(validateFile);
      validFiles.forEach(onFileSelect);
    } else {
      const file = fileArray[0];
      if (file && validateFile(file)) {
        onFileSelect(file);
      }
    }
  }, [multiple, validateFile, onFileSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files);
    }
  }, [disabled, handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleClick = () => {
    if (disabled) return;
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.multiple = multiple;
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        handleFileSelect(files);
      }
    };
    input.click();
  };

  const renderPreview = () => {
    if (!value) return null;

    const files = Array.isArray(value) ? value : [value];
    
    return (
      <div className="mt-4 space-y-2">
        {files.map((file, index) => (
          <div key={`${file.name}-${index}`} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
            <div className="flex-shrink-0">
              {file.type.startsWith('image/') ? (
                <Image className="h-5 w-5 text-primary" />
              ) : (
                <File className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            {onRemove && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onRemove(multiple ? index : undefined)}
                className="flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer",
          "hover:border-primary/50 hover:bg-primary/5",
          isDragOver && "border-primary bg-primary/10",
          disabled && "opacity-50 cursor-not-allowed",
          error && "border-destructive",
          !error && !isDragOver && "border-border"
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className={cn(
            "h-10 w-10 mb-4",
            isDragOver ? "text-primary" : "text-muted-foreground"
          )} />
          <p className="text-sm font-medium mb-1">
            Drop files here or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            {accept === 'image/*' ? 'Images only' : accept} • Max {Math.round(maxSize / 1024 / 1024)}MB
          </p>
        </div>
      </div>
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      
      {renderPreview()}
    </div>
  );
}