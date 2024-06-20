import React from 'react';

function Header({ totalCount }) {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Creche Dashboard ({totalCount})</h1>
    </header>
  );
}

export default Header;