import React, { useState } from "react";
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

function LineChart({weatherHeading, data }) {
  const { getTimeDay } = useGlobalContext();
  const [weather, setWeather] = useState({
    labels: data.map((item) => getTimeDay(item.dt).resultTime),
    datasets: [
      {
        label: `${weatherHeading}`,
        data: data.map((item) => {
          if (item.temp.day === undefined) {
            return Math.ceil(item.temp);
          } else {
            return Math.ceil(item.temp.day);
          }
        }),
        borderColor: "white",
        backgroundColor: " #3c68df",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  });
  return (
    <div className="linechart-container">
      <Line
        data={weather}
        options={{
          plugins:{

            legend: {
              labels: {
              color: 'White'
            }
          },
          },
          maintainAspectRatio: false,
          pointRadius: 5,
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
