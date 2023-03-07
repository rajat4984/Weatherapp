import FiveDays from "./components/FiveDays";
import FiveHour from "./components/FiveHour";
import Navbar from "./components/Navbar";
import TodayWeather from "./components/TodayWeather";
import "./scss/index.scss";

function App() {
  return (
    <div className="app">
      <Navbar brandName="WeatherOwn" />
      <TodayWeather />
      <FiveHour />
      <FiveDays/>
    </div>
  );
}

export default App;
