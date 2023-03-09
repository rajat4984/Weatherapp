import FiveDays from "./components/FiveDays";
import FiveHour from "./components/FiveHour";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodayWeather from "./components/TodayWeather";
import "./scss/index.scss";

function App() {
  return (
    <div className="app">
      <Navbar brandName="WeatherOwn" />
      <div className="content-wrapper">
        <TodayWeather />
        <FiveHour />
        <FiveDays />
      </div>
      <Footer />
    </div>
  );
}

export default App;
