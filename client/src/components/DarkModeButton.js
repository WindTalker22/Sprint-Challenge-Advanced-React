import React, { useState } from "react"
import { useDarkMode } from "../hooks/useDarkMode"

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useDarkMode("dark", false)
  const toggleMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <div
          data-testid="toggles"
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  )
}

export default DarkModeButton
