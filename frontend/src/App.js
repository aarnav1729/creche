import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CaptureImage from './components/CaptureImage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://creche-cfp6.onrender.com/api/attendance');
      setAttendanceList(result.data);
    };
    fetchData();
  }, []);

  const addAttendanceEntry = (entry) => {
    setAttendanceList([...attendanceList, entry]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header totalCount={attendanceList.length} />
      <CaptureImage onAddEntry={addAttendanceEntry} />
      <Dashboard attendanceList={attendanceList} />
    </div>
  );
}

export default App;