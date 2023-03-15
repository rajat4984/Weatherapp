import React from "react";
import { useGlobalContext } from "../context";
import "../scss/components/todayweather.scss";

function TodayWeather() {
  const { currentData, getIcon, getTimeDay } = useGlobalContext();

  const todayDate = new Date();
  const today = String(todayDate).slice(0, 10);
  return (
    <>
      {currentData === undefined ? (
        <></>
      ) : (
        <div className="today-weather">
          <div className="location">
            <h1>New Delhi,IN</h1>
            <p>{today}</p>
          </div>

          <div className="today-info-container">
            <div className="today-temp">
              <h1>
                {getIcon(currentData.weather[0].id)}
                {Math.ceil(currentData.temp.day)}
                <sup>°</sup>
              </h1>
              <p>{currentData.weather[0].main}</p>
            </div>

            <div className="today-temp-grid">
              <div className="temp-grid-item">
                <p className="grid-main">
                  {Math.ceil(currentData.temp.max)}
                  <sup>°</sup>
                </p>
                <p className="grid-sub">high</p>
              </div>
              <div className="temp-grid-item">
                <p className="grid-main">{`${Math.ceil(
                  (currentData.wind_speed * 18) / 5
                )}kmph`}</p>
                <p className="grid-sub">wind</p>
              </div>
              <div className="temp-grid-item">
                <p className="grid-main">
                  {getTimeDay(currentData.sunrise).resultTime}
                </p>
                <p className="grid-sub">sunrise</p>
              </div>
              <div className="temp-grid-item">
                <p className="grid-main">
                  {Math.ceil(currentData.temp.min)}
                  <sup>°</sup>
                </p>
                <p className="grid-sub">low</p>
              </div>
              <div className="temp-grid-item">
                <p className="grid-main">{`${currentData.humidity}%`}</p>
                <p className="grid-sub">humidity</p>
              </div>
              <div className="temp-grid-item">
                {getTimeDay(currentData.sunset).resultTime}
                <p className="grid-sub">sunset</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodayWeather;
