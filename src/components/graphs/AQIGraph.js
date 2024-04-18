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

const AQIGraph = () => {
  const labels = Array.from({ length: 52 }, (_, i) => `${i + 1}`);
  const aqi_values = [
    45, 42, 47, 40, 38, 36, 35, 34, 41, 44, 48, 50, 53, 55, 57, 60, 62, 58, 59, 61, 63, 65, 67, 68, 65, 64, 62, 60, 58, 56, 54, 52, 50, 52, 50, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Air Quality Index',
        data: aqi_values,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
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
        text: 'Air Quality Index Trends for the Past Year',
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
          text: 'Air Quality Index',
        },
        min: 0,
        max: 100,
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

export default AQIGraph;