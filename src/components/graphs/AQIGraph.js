import React from 'react';
import './graphs.css'
import { BsWind, BsCloudRain, BsCloudDrizzle, BsCloudSnow, BsCloudFog2, BsCloudSun } from 'react-icons/bs';
import { FiDroplet, FiSun, } from 'react-icons/fi';
import { TbTemperature, TbCloudStorm, TbMist, TbTornado } from 'react-icons/tb';
import { TfiHandPointRight } from "react-icons/tfi";
import { Line } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';
import { FaRegHandPointDown } from "react-icons/fa6";

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
  const aqi_values = Array.from({ length: 52 }, () => Math.floor(Math.random() * 20) + 20);

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
        color: 'white',

      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Air Quality Index Trends for the Past Year',
        color: 'white',
      },
      legend: {
        labels: {
          color: 'white', // Change legend label color to white
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Air Quality Index',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', 
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
      <h4>Scroll Down<FaRegHandPointDown size={28}/></h4>
      <div className="bottom">
        <div className="innerbot" style={{ color: '#42566c' }}>
          <div className="wind">
            <p className="small">Click here <TfiHandPointRight size={20} /></p>
          </div>
          <div className="feelslike">
            <NavLink to="/temp-graph" className="nav-link">
              <p className="small"><TbTemperature />Temperature</p>
            </NavLink>
          </div>
          <div className="humidity">
            <NavLink to="/humidity-graph" className="nav-link">
              <p className="small"><FiDroplet />Humidity</p>
            </NavLink>
          </div>
          <div className="aqi">
            <NavLink to="/aqi-graph" className="nav-link">
              <p className="small"><BsWind />AQI</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AQIGraph;