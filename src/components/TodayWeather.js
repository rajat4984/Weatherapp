import React from "react";
import { BsSun } from "react-icons/bs";
import { useGlobalContext } from "../context";
import "../scss/components/todayweather.scss";

function TodayWeather() {
  const { currentData, getIcon, getTimeDay } = useGlobalContext();
  return (
    <div className="today-weather">
      <div className="location">
        <h1>New Delhi,IN</h1>
        <p>Monday 6 March</p>
      </div>

      <div className="today-info-container">
        <div className="today-temp">
          <h1>
            <BsSun />
            30
            <sup>°</sup>
          </h1>
          <p>clear</p>
        </div>

        <div className="today-temp-grid">
          <div className="temp-grid-item">
            <p className="grid-main">
              30 <sup>°</sup>
            </p>
            <p className="grid-sub">high</p>
          </div>
          <div className="temp-grid-item">
            <p className="grid-main">30</p>
            <p className="grid-sub">wind</p>
          </div>
          <div className="temp-grid-item">
            <p className="grid-main">6:41</p>
            <p className="grid-sub">sunrise</p>
          </div>
          <div className="temp-grid-item">
            <p className="grid-main">
              19<sup>°</sup>
            </p>
            <p className="grid-sub">low</p>
          </div>
          <div className="temp-grid-item">
            <p className="grid-main">25%</p>
            <p className="grid-sub">humidity</p>
          </div>
          <div className="temp-grid-item">
            <p className="grid-main">18:23</p>
            <p className="grid-sub">sunset</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
