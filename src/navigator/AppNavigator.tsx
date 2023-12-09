import React from "react";
import { Link } from "react-router-dom";

interface AppNavigatorProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const AppNavigator: React.FC<AppNavigatorProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-800 p-8 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to="/" className="text-white block mb-4" onClick={toggleMenu}>
          Home
        </Link>
        <Link
          to={`/about`}
          className="text-white block mb-4"
          onClick={toggleMenu}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default AppNavigator;
