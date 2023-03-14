import React from "react";
import { useGlobalContext } from "../context";
import LineChart from "./LineChart";
import "../scss/components/fivehour.scss";

function FiveHour() {
  const {
    fiveHourData,
    getIcon,
    getTimeDay,
    showFiveHourChart,
    setFiveHourChart,
  } = useGlobalContext();

  return (
    <div className="five-hour">
      <div className="heading-container">
        <h3 className="five-hour-heading">Next 5 hours</h3>
        <p onClick={() => setFiveHourChart(!showFiveHourChart)}>Chart</p>
      </div>
      {!showFiveHourChart ?(<div className="five-hour-grid">
        {fiveHourData.map((item, index) => {
          const { resultTime } = getTimeDay(item.dt); //getting time from the object returned by getTimeDay
          return (
            <div className="grid-item" key={index}>
              <p className="degree">
                {Math.floor(item.temp)}
                <sup>°</sup>
              </p>
              <p className="icon">{getIcon(item.weather[0].id)}</p>
              <p className="time">{resultTime}</p>
            </div>
          );
        })}
      </div>) : <LineChart/>}
    </div>
  );
}

export default FiveHour;
