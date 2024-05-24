import React, { useState } from "react";

const Header = ({ onThemeChange }) => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <header
      className={`bg-${theme === "light" ? "light" : "dark"} text-${
        theme === "light" ? "dark" : "light"
      } py-3`}
    >
      <div className="px-5 d-flex justify-content-between align-items-center">
        <h1 class="fw-bolder text-primary">Web Builder</h1>
        <button
          className={`btn btn-${theme === "light" ? "dark" : "light"}`}
          onClick={handleThemeChange}
        >
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>
      </div>
    </header>
  );
};

export default Header;
