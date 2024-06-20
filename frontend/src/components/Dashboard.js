import React from 'react';

function Dashboard({ attendanceList }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Attendance Dashboard</h2>
      <ul className="bg-white p-6 rounded shadow-md">
        {attendanceList.map((attendance) => (
          <li key={attendance._id} className="mb-4">
            <p>Name: {attendance.name}</p>
            <p>In Time: {attendance.inTime}</p>
            <p>Out Time: {attendance.outTime}</p>
            <img src={attendance.image} alt={`${attendance.name}'s capture`} className="mt-2 max-w-sm" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;