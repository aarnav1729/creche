import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ attendanceList, onUpdateEntry }) {
  const [attendanceData, setAttendanceData] = useState(attendanceList);
  const [editingEntry, setEditingEntry] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', inTime: '', outTime: '', image: null });

  useEffect(() => {
    setAttendanceData(attendanceList);
  }, [attendanceList]);

  const handleUpdateEntry = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', editingEntry._id);
    formData.append('name', editForm.name);
    formData.append('inTime', editForm.inTime);
    if (editForm.outTime) {
      formData.append('outTime', editForm.outTime);
    }
    if (editForm.image) {
      formData.append('image', editForm.image);
    }

    try {
      const response = await axios.put('http://localhost:9000/api/attendance/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onUpdateEntry(response.data);
      setEditingEntry(null);
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
    setEditForm({ name: entry.name, inTime: entry.inTime, outTime: entry.outTime, image: null });
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setEditForm(prevForm => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Attendance Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-center">In Time</th>
              <th className="py-2 px-4 border-b text-center">Out Time</th>
              <th className="py-2 px-4 border-b text-center">Image</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance) => (
              <tr key={attendance._id}>
                <td className="py-2 px-4 border-b text-left">{attendance.name}</td>
                <td className="py-2 px-4 border-b text-center">{attendance.inTime}</td>
                <td className="py-2 px-4 border-b text-center">{attendance.outTime}</td>
                <td className="py-2 px-4 border-b text-center">
                  <img
                    src={`http://localhost:9000/${attendance.image}`}
                    alt={`${attendance.name}'s capture`}
                    className="h-16 w-16 object-cover rounded-full mx-auto"
                  />
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleEditEntry(attendance)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingEntry && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl mb-4">Edit Entry</h2>
            <form onSubmit={handleUpdateEntry}>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleFormChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">In Time:</label>
                <input
                  type="time"
                  name="inTime"
                  value={editForm.inTime}
                  onChange={handleFormChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Out Time:</label>
                <input
                  type="time"
                  name="outTime"
                  value={editForm.outTime}
                  onChange={handleFormChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image:</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFormChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setEditingEntry(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;