import React, { useState } from "react";
import TopBar from "./components/Navigation/TopBar/TopBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import { NavigationProvider } from "./context/NavigationContext";
import AppNavigator from "./navigator/AppNavigator";

const App: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <NavigationProvider>
        <div className={`${isMenuOpen ? "overflow-hidden" : ""}`}>
          <TopBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-gray-800 p-8 z-10 transform transition-transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <AppNavigator
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
            ></AppNavigator>
          </div>
        </div>
        <div className="max-h-screen flex flex-1 w-screen p-8">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </NavigationProvider>
    </Router>
  );
};

export default App;
