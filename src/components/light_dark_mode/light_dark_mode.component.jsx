import "./light_dark_mode.styles.css";
import useLocalStorage from "./use_local_storage";

export default function LightDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "dark");
  const handleModeSelector = (handleModeSelector) => {
    console.log("1- ", handleModeSelector.target.value);
    console.log("2- ", handleModeSelector);
    console.log("3- ", darkMode);
    switch (handleModeSelector.target.value) {
      case "dark":
        setDarkMode("dark");
        break;
      case "light":
        setDarkMode("light");
        break;
      case "grey":
        setDarkMode("grey");
        break;
    }
  };
  const handleMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };
  return (
    <div className="light-dark-mode" data-darkMode={darkMode}>
      <div className="light-dark-mode-container">
        <p>Hello World!</p>
        <button onClick={handleMode}>
          {darkMode === "dark" ? "🌞" : "🌙"}
        </button>
        <div className="light-dark-mode-selector">
          <label>Select Mode</label>
          <select name="mode" id="mode" onChange={handleModeSelector}>
            <option value="">--Choose an option--</option>
            <option value="dark">Dark Mode</option>
            <option value="light">Light Mode</option>
            <option value="grey">Grey Mode</option>
          </select>
        </div>
      </div>
    </div>
  );
}
