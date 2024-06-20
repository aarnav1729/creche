import React, { useState } from 'react';
import axios from 'axios';

function CaptureImage({ onAddEntry }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('inTime', inTime);
    formData.append('outTime', outTime);

    try {
      const response = await axios.post('http://localhost:9000/api/attendance', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Entry successful');
      onAddEntry(response.data);
    } catch (error) {
      console.error('Error recording attendance:', error);
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
        <div className="mb-4">
          <label className="block text-gray-700">Out Time:</label>
          <input
            type="time"
            value={outTime}
            onChange={(e) => setOutTime(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CaptureImage;