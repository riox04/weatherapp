import React from 'react';
import './graphs.css'
import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const TempGraph = () => {
  const labels = Array.from({ length: 52 }, (_, i) => `${i + 1}`);
  const max_temps = [
    20, 19, 21, 17, 16, 15, 14, 13, 19, 20, 24, 26, 30, 32, 33, 37, 39, 35, 36, 38, 41, 42, 43, 44, 41, 40, 38, 36, 35, 33, 32, 31, 29, 29, 31, 29, 27, 25, 23, 21, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8,
  ];
  const min_temps = [
    15, 14, 16, 12, 11, 10, 9, 8, 13, 14, 18, 20, 24, 26, 28, 31, 33, 29, 30, 32, 35, 36, 37, 38, 35, 34, 32, 30, 29, 27, 26, 25, 24, 23, 25, 23, 21, 19, 17, 15, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Maximum Temperature',
        data: max_temps,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Minimum Temperature',
        data: min_temps,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Temperature Trends for the Past Year',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        min: 0,
        max: 50,
      },
    },
  };

  return (
    <>
      <div className="aqi-graph-container">
      <Line options={options} data={data} />
      </div>
    </>
  );
};

export default TempGraph;