import React, { useEffect } from "react";
import { BsSun } from "react-icons/bs";
import { useGlobalContext } from "../context";
import "../scss/components/todayweather.scss";

function TodayWeather() {
  const { getTodayWeather, currentData, getIcon, getTimeDay } =
    useGlobalContext();
    useEffect(() => {
      getTodayWeather();
    }, [])
    
  return (
    <>
      {currentData && (
        <div className="today-weather">
          <div className="location">
            <h1>New Delhi,IN</h1>
            <p>Monday 6 March</p>
          </div>

          <div className="today-info-container">
            <div className="today-temp">
              <h1>
                <BsSun />
                {Math.ceil(currentData.temp.day)}
                <sup>°</sup>
              </h1>
              <p>{currentData.weather.main}</p>
            </div>

            <div className="today-temp-grid">
              <div className="temp-grid-item">
                <p className="grid-main">
                  {/* {Math.ceil(currentData.temp.max)} <sup>°</sup> */}
                </p>
                <p className="grid-sub">high</p>
              </div>
              <div className="temp-grid-item">
                <p className="grid-main">
                  {`${Math.ceil((currentData.wind_speed * 18) / 5)}kmph`}{" "}
                </p>
                <p className="grid-sub">wind</p>
              </div>
              <div className="temp-grid-item">
                {/* <p className="grid-main">{getTimeDay(currentData.sunrise)}</p> */}
                <p className="grid-sub">sunrise</p>
              </div>
              <div className="temp-grid-item">
                <p className="grid-main">
                  {/* {Math.ceil(currentData.temp.min)} */}
                  <sup>°</sup>
                </p>
                <p className="grid-sub">low</p>
              </div>
              <div className="temp-grid-item">
                {/* <p className="grid-main">{`${currentData.humidity}%`}</p> */}
                <p className="grid-sub">humidity</p>
              </div>
              <div className="temp-grid-item">
                {/* <p className="grid-main">{getTimeDay(currentData.sunset)}</p> */}
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
