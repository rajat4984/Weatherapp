import React from "react";
import { useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const apiKey = `170e7d85c14723782ac20964a574ef47`;
  const [city, setCity] = useState("Delhi");

  const getLatLon = async () => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    const res = await axios.get(url);
    const data = res.data[0];
    const lat = data.lat;
    const lon = data.lon;
    return [lat, lon];
  };

  const fiveHourData = async () => {
    const cityInfo = await getLatLon();
    const lat = cityInfo[0];
    const lon = cityInfo[1];

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=${apiKey}`;
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
  };

  fiveHourData();

  return (
    <AppContext.Provider value={{ getLatLon }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
