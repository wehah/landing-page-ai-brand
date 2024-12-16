import { useState, useEffect } from "react";
import Button from "../../Common/Buttons/Buttons";
export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light-theme" : "dark-theme");
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    if (localStorage.getItem("theme") === "dark-theme") {
      setDarkMode(true);
    }
  }, [darkMode]);

  return (
    <Button
      shape={"rounded"}
      variant={"textLink"}
      label={darkMode ? "light_mode" : "dark_mode"}
      onClick={toggleDarkMode}
    />
  );
}
