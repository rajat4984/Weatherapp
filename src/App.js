import React, { useEffect } from "react";
import FiveDays from "./components/FiveDays";
import FiveHour from "./components/FiveHour";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import TodayWeather from "./components/TodayWeather";
import { useGlobalContext } from "./context";
import "./scss/index.scss";

function App() {
  const { getFiveHourData, city, unit, fiveHourData,loading,setLoading } = useGlobalContext();

  useEffect(() => {
    getFiveHourData();
  }, [city, unit]);

  return (
    <div className="app">
      {loading  ? (
        <div >
          <Loading />
        </div>
      ) : (
        <>
          <Navbar brandName="WeatherOwn" />
          <div className="content-wrapper">
            <TodayWeather />
            <FiveHour />
            <FiveDays />
          </div>
          <Footer />{" "}
        </>
      )}
    </div>
  );
}

export default App;
