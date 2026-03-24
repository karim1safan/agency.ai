import React, { useEffect } from 'react'
import assets from '../assets/assets'

function ThemeToggleButton({ theme, setTheme }) {

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  return (
    // Theme Toggle Button Component 
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          />
        )}
      </button>
    </>
  );
}

export default ThemeToggleButton