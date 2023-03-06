import React from "react";
import { BsClouds } from "react-icons/bs";

function FiveHour() {
  return (
    <div className="five-hour">
      <h3 className="five-hour-heading">Next 5 hours</h3>
      <div className="five-hour-grid">
        <div className="grid-item">
          <p className="degree">
            29<sup>°</sup>
          </p>
          <p className="icon">
            <BsClouds />
          </p>
          <p className="time">16:30</p>
        </div>

        <div className="grid-item">
          <p className="degree">
            29<sup>°</sup>
          </p>
          <p className="icon">
            <BsClouds />
          </p>
          <p className="time">16:30</p>
        </div>

        <div className="grid-item">
          <p className="degree">
            29<sup>°</sup>
          </p>
          <p className="icon">
            <BsClouds />
          </p>
          <p className="time">16:30</p>
        </div>

        <div className="grid-item">
          <p className="degree">
            29<sup>°</sup>
          </p>
          <p className="icon">
            <BsClouds />
          </p>
          <p className="time">16:30</p>
        </div>

        <div className="grid-item">
          <p className="degree">
            29<sup>°</sup>
          </p>
          <p className="icon">
            <BsClouds />
          </p>
          <p className="time">16:30</p>
        </div>
      </div>
    </div>
  );
}

export default FiveHour;
