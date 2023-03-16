import React, { useState } from "react";
import { UserData } from "../Data";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js/auto";
import { useGlobalContext } from "../context";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function LineChart({ data }) {
  const { getTimeDay } = useGlobalContext();

  const [weather, setWeather] = useState({
    labels: data.map((item) => getTimeDay(item.dt).resultTime),
    datasets: [
      {
        label: "5 Hour Weather",
        data: data.map((item) => Math.ceil(item.temp)),
        borderColor: "white",
        backgroundColor: " #3c68df",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  });
  return (
    <div style={{ width: "90%" }}>
      <Line
        data={weather}
        options={{
          responsive: true,
          pointRadius:5,
          scales: {
            y: {
              ticks: { color: "white" },
              beginAtZero: true,
            },
            x: {
              ticks: { color: "white" },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
