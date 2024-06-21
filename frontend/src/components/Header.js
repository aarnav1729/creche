import React from 'react';

function Header({ totalCount }) {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Creche Dashboard</h1>
      <span className="text-xl">{totalCount}</span>
    </header>
  );
}

export default Header;