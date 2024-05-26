import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUpload = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    uploadFile(file);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Button
      component="label"
      fullWidth
      variant="outlined"
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </Button>
  );
};

export default FileUpload;
