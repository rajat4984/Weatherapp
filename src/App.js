import React,{useEffect} from "react";
import FiveDays from "./components/FiveDays";
import FiveHour from "./components/FiveHour";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodayWeather from "./components/TodayWeather";
import { useGlobalContext } from "./context";
import "./scss/index.scss";

function App() {
  const {getLatLon} = useGlobalContext();

  useEffect(() => {
    getLatLon();
  }, [])
  
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
