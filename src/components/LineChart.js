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

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function LineChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        color: "red",
        borderColor: "black",
        borderWidth: 2,
        tension: .4,
      },
    ],
  });
  return (
    <div style={{ width: "50%" }}>
      <Line
        data={userData}
        options={{
          responsive: true,
          scales: {
            y: {
              ticks: { color: "white", beginAtZero: true },
            },
            x: {
              ticks: { color: "white", beginAtZero: true },
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
