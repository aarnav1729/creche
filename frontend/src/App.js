import React, { useState } from 'react';
import CaptureImage from './components/CaptureImage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  const [attendanceList, setAttendanceList] = useState([]);

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