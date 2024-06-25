import React from 'react';

function Header({ totalCount }) {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Creche Dashboard</h1>
        <div className="flex items-center">
          <span className="text-lg font-medium">Total Count: {totalCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;