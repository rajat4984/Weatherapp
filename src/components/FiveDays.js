import React from "react";
import { useGlobalContext } from "../context";
import LineChart from "./LineChart";
import "../scss/components/fivedays.scss";

function FiveDays() {
  const {
    fiveDaysData,
    getIcon,
    getTimeDay,
    showFiveDayChart,
    setFiveDayChart,
  } = useGlobalContext();

  return (
    <div className="five-days">
      <div className="heading-container">
        <h3 className="five-days-heading">Next 5 Days</h3>
        <p
          onClick={() => {
            setFiveDayChart(!showFiveDayChart);
          }}
        >
          Chart
        </p>
      </div>

      {!showFiveDayChart ? (
        <div className="five-days-grid">
          {fiveDaysData.map((item, index) => {
            return (
              <div className="grid-item" key={index}>
                <div className="grid-sub-item">
                  <p className="grid-main">{getTimeDay(item.dt).day}</p>
                  <p className="grid-sub">
                    32<sup>°</sup>
                  </p>
                </div>
                <div className="grid-sub-item">
                  <p className="grid-main">{getIcon(item.weather[0].id)}</p>
                </div>
                <div className="grid-sub-item">
                  <p className="grid-main">
                    {Math.floor(item.temp.max)}
                    <sup>°</sup>
                  </p>
                  <p className="grid-sub">High</p>
                </div>
                <div className="grid-sub-item">
                  <p className="grid-main">
                    {Math.floor(item.temp.min)}
                    <sup>°</sup>
                  </p>
                  <p className="grid-sub">low</p>
                </div>
                <div className="grid-sub-item">
                  <p className="grid-main">{`${Math.ceil(
                    (item.wind_speed * 18) / 5
                  )}kmph`}</p>
                  <p className="grid-sub">Wind</p>
                </div>
                <div className="grid-sub-item">
                  <p className="grid-main">{`${item.humidity}%`}</p>
                  <p className="grid-sub">humidity</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <LineChart data ={fiveDaysData} />
      )}
    </div>
  );
}

export default FiveDays;
