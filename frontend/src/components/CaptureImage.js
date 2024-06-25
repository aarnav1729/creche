import React, { useState } from 'react';
import axios from 'axios';

function CaptureImage({ onAddEntry }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [inTime, setInTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('inTime', inTime);

    try {
      const response = await axios.post('https://creche-cfp6.onrender.com/api/attendance', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Entry saved successfully');
      onAddEntry(response.data);
      setName('');
      setImage(null);
      setInTime('');
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Capture Image:</label>
          <input
            type="file"
            accept="image/*"
            capture="camera"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">In Time:</label>
          <input
            type="time"
            value={inTime}
            onChange={(e) => setInTime(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CaptureImage;