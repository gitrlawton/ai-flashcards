'use client';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { useState } from 'react';

export default function FileUpload({ onFlashcardsGenerated }) {
  const [isUploading, setIsUploading] = useState(false);

  const handleProcessFile = (error, file) => {
    if (error) {
      console.error('Error uploading file:', error);
      setIsUploading(false);
      return;
    }

    // The file is already uploaded at this point, so we just need to parse the response
    if (file.serverId) {
      try {
        const flashcards = JSON.parse(file.serverId);
        setIsUploading(false);
        onFlashcardsGenerated(flashcards);
      } catch (error) {
        console.error('Error parsing flashcards:', error);
        setIsUploading(false);
      }
    }
  };

  return (
    <div>
      <FilePond
        server={{
          process: '/api/upload',
          fetch: null,
          revert: null,
        }}
        onaddfile={() => setIsUploading(true)}
        onprocessfile={handleProcessFile}
      />
      {isUploading && <p>Generating flashcards...</p>}
    </div>
  );
}