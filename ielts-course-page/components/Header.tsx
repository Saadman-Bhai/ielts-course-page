import React from 'react';

/**
 * A basic header component for the page.
 * @returns {JSX.Element} The header element.
 */
const Header = (): JSX.Element => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <h1 className="text-xl font-bold text-gray-800">
          Course Details
        </h1>
      </nav>
    </header>
  );
};

export default Header;