import React, { useEffect } from "react";
import { BsClouds } from "react-icons/bs";
import { useGlobalContext } from "../context";
import "../scss/components/fivehour.scss";

function FiveHour() {
  const { getFiveHourData, fiveHourData, city, getIcon, getTime } =
    useGlobalContext();
  console.log(fiveHourData);
  useEffect(() => {
    getFiveHourData();
  }, [city]);

  return (
    <div className="five-hour">
      <div className="heading-container">
        <h3 className="five-hour-heading">Next 5 hours</h3>
        <p>Chart</p>
      </div>
      <div className="five-hour-grid">
        {fiveHourData.map((item, index) => {
          return (
            <div className="grid-item" key={index}>
              <p className="degree">
                {Math.floor(item.temp)}
                <sup>°</sup>
              </p>
              <p className="icon">{getIcon(item.weather[0].id)}</p>
              <p className="time">{getTime(item.dt)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FiveHour;
