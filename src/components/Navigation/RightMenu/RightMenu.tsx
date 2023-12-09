import React from "react";

interface TopBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Your Logo</div>
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
