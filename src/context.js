import React from "react";
import { useContext, useState, useEffect } from "react";
import { IoThunderstormOutline } from "react-icons/io5";
import {
  BsSun,
  BsCloudRainHeavy,
  BsCloudHaze,
  BsCloudDrizzle,
  BsCloudSnow,
  BsClouds,
} from "react-icons/bs";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const apiKey = `170e7d85c14723782ac20964a574ef47`;
  const [city, setCity] = useState("Delhi");
  const [unit, setUnit] = useState("metric");
  const [fiveHourData, setFiveHourData] = useState([]);

  const getLatLon = async () => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    const res = await axios.get(url);
    const data = res.data[0];
    const lat = data.lat;
    const lon = data.lon;
    return [lat, lon];
  };

  const getFiveHourData = async () => {
    const cityInfo = await getLatLon();
    const lat = cityInfo[0];
    const lon = cityInfo[1];

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,daily&appid=${apiKey}`;
    const res = await axios.get(url);
    const data = res.data;
    const hourlyData = data.hourly.slice(2, 7);
    setFiveHourData([...hourlyData]);
  };

  const getIcon = (iconId) => {
    if (iconId >= 200 && iconId <= 232) {
      return <IoThunderstormOutline />;
    } else if (iconId >= 300 && iconId <= 321) {
      return <BsCloudDrizzle />;
    } else if (iconId >= 500 && iconId <= 531) {
      return <BsCloudRainHeavy />;
    } else if (iconId >= 600 && iconId <= 621) {
      return <BsCloudSnow />;
    } else if (iconId >= 701 && iconId <= 771) {
      return <BsCloudHaze />;
    } else if (iconId >= 801 && iconId <= 804) {
      return <BsClouds />;
    } else {
      <BsSun />;
    }
  };

  const getTime = (unixTime) => {
    const time = new Date(unixTime * 1000).toLocaleTimeString();
    const numberTime = time.slice(0, 5);
    const alphaTime = time.slice(8, 11);
    return numberTime + alphaTime;
  };

  getTime();

  return (
    <AppContext.Provider
      value={{ getFiveHourData, fiveHourData, city, getIcon, getTime }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
