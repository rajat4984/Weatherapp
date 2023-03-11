import React,{useEffect} from "react";
import FiveDays from "./components/FiveDays";
import FiveHour from "./components/FiveHour";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodayWeather from "./components/TodayWeather";
import LineChart from "./components/LineChart";
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
      {/* <LineChart/> */}
    </div>
  );
}

export default App;
