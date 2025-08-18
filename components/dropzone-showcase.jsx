'use client';

import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const DropzoneExample = () => {
  const [files, setFiles] = useState();
  const [filePreview, setFilePreview] = useState();

  const handleDrop = (files) => {
    console.log(files);
    setFiles(files);
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setFilePreview(e.target?.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className="my-8">
      <div className="mb-4">
        <h2 className="text-2xl tracking-tight mb-2">Dropzone</h2>
        <p className="text-muted-foreground text-lg mb-2">
          This component provides a dropzone for files, with this particular variant displaying the file preview.
        </p>
        <ul className="list-disc list-inside text-muted-foreground text-lg">
          <li>Uploading a logo for an organisation</li>
          <li>Uploading a photo for an event</li>
        </ul>
      </div>

      <Dropzone
        accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
        onDrop={handleDrop}
        onError={console.error}
        src={files}
      >
        <DropzoneEmptyState />
        <DropzoneContent>
          {filePreview && (
            <div className="h-[102px] w-full">
              <img
                alt="Preview"
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={filePreview}
              />
            </div>
          )}
        </DropzoneContent>
      </Dropzone>

      <Button
        variant="outline"
        className="mt-4"
        onClick={() => setFiles(undefined)}
      >
        Clear Photo
      </Button>
    </div>
  );
};