import "./light_dark_mode.styles.css";
import useLocalStorage from "./use_local_storage";
import { useState } from "react";

export default function LightDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "dark");
  const [selector, setSelector] = useState("");

  const handleMode = (handleMode) => {
    switch (handleMode.target.value) {
      case "dark":
        setDarkMode("dark");
        console.log("1-- ", darkMode);
        break;
      case "light":
        setDarkMode("light");
        console.log("2-- ", darkMode);
        break;
      case "grey":
        setDarkMode("grey");
        console.log("3-- ", darkMode);
        break;
    }
  };

  const handleModeButton = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  const handleSelector = (handleSelector) => {
    switch (handleSelector.target.value) {
      case "button":
        setSelector("button");
        console.log("1-- ", selector);
        break;
      case "selector":
        setSelector("selector");
        console.log("2-- ", selector);
        break;
      default:
        setSelector("");
        setDarkMode("dark");
        console.log("3-- ", selector);
        break;
    }
  };

  return (
    <div className="light-dark-mode" data-darkMode={darkMode}>
      <div className="light-dark-mode-selector">
        <select name="option" id="option" onChange={handleSelector}>
          <option value="">--Choose an option--</option>
          <option value="button">Button</option>
          <option value="selector">Selector</option>
        </select>
      </div>

      <div className="light-dark-mode-container">
        <p>Hello World!</p>
        {selector === "button" ? (
          <button
            onClick={handleModeButton}
            disabled={selector !== "button" ? true : false}
          >
            {darkMode === "dark" ? "Light" : "Dark"}
          </button>
        ) : null}

        <div className="light-dark-mode-selector">
          {selector === "selector" ? (
            <select
              name="mode"
              id="mode"
              onChange={handleMode}
              disabled={selector !== "selector" ? true : false}
            >
              <option value="">--Select a Mode--</option>
              {darkMode === "dark" ? null : (
                <option value="dark">Dark Mode</option>
              )}
              {darkMode === "light" ? null : (
                <option value="light">Light Mode</option>
              )}

              {darkMode === "grey" ? null : (
                <option value="grey">Grey Mode</option>
              )}
            </select>
          ) : null}
        </div>
      </div>
    </div>
  );
}
