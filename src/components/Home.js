import React, { useState } from 'react'
import axios from 'axios'
import CountUp from 'react-countup';
import ColorContrastChecker from 'color-contrast-checker';
import { NavLink }  from 'react-router-dom';
import 'moment-timezone';
import './Home.css';
import { BsWind, BsCloudRain, BsCloudDrizzle, BsCloudSnow, BsCloudFog2, BsCloudSun } from 'react-icons/bs';
import { FiDroplet, FiSun, } from 'react-icons/fi';
import { TbTemperature, TbCloudStorm, TbMist, TbTornado } from 'react-icons/tb';
import HumidityGraph from './graphs/HumidityGraph.js';
import TempGraph from './graphs/TempGraph.js';
import AQIGraph from './graphs/AQIGraph.js';


function Home() {

  const [data, setData] = useState({});
  const [aqiData, setAqiData] = useState({})
  const [aqType, setAqType] = useState('')

  const [imgUrl, setImgUrl] = useState([]);
  const [location, setLocation] = useState('');
  let [maincolor, setMaincolor] = useState('');

  const WT_KEY = '1631f8529f1f537a5a46b47ba54270e2';
  const PIC_KEY = '9Ys9G8yukXFxjWLq0s32IigZWftwBJNtVoBXF0Ui0OI';

  const searchLocation = (event) => {

    if (event.key === 'Enter') {
      let lat = 0;
      let lon = 0;

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${WT_KEY}`)
        .then((response) => {
          if (response !== undefined) {
            setData(response.data)
            lat = response.data.coord.lat;
            lon = response.data.coord.lon;
          }
        }).then(() => {
          axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WT_KEY}`)
            .then((aqiresponse) => {
              if (aqiresponse !== undefined) {
                const aqiValue = aqiresponse.data.list[0].main.aqi;
                let aqiType = "";
                switch (aqiValue) {
                  case 1:
                    aqiType = "Good";
                    break;
                  case 2:
                    aqiType = "Fair";
                    break;
                  case 3:
                    aqiType = "Moderate";
                    break;
                  case 4:
                    aqiType = "Poor";
                    break;
                  case 5:
                    aqiType = "Very Poor";
                    break;
                  default:
                    aqiType = "Unknown";
                    break;
                }
                setAqiData(aqiValue);
                setAqType(aqiType);
              }
            })

        })

      // const aqiresponse = { // this is api ninjas
      //   method: 'GET',
      //   url: `https://api.api-ninjas.com/v1/airquality?city=${location}`,
      //   headers: {
      //     'X-Api-Key': '6P3yz7d6usWxUQTSWB4iog==Jqu732bMo5btBlQQ',
      //   }
      // };



      axios.get(`https://api.unsplash.com/search/photos?page=1&query=${location}&client_id=${PIC_KEY}`)
        .then((background) => {
          setImgUrl(background.data.results[5].urls.regular)
          setMaincolor(background.data.results[5].color)
        })
      setLocation('')
    }
  }

  const divStyle = {
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 21.57%, rgba(0, 0, 0, 0.153637) 83.67%, rgba(0, 0, 0, 0.5) 100%), url(' + imgUrl + ')',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  const truncateString = (str, num) => { /// shortens the city name if more than num=12
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  // this is to check if the background color is very bright then the white text wont be visible so we change it to a darker colour
  var ccc = new ColorContrastChecker();

  var color1 = "#fff";


  if (ccc.isLevelAA(color1, maincolor, 120)) {
  } else {
    maincolor = "#42566c";
  }


  return (
    <div className="app" style={divStyle}>
      <div className="container">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter a location...'
          type="text"
          style={{ color: maincolor }}
        />
        {data.main ?
          <div className="top-container">
            <div className="top" style={{ background: `radial-gradient(rgba(255,255,255,0.5) 0%, ${maincolor} 350%)` }}>
              <h2 style={{ color: maincolor }}>{truncateString(data.name, 15)}</h2>
              {data.main ? <h1 style={{ color: maincolor }}><CountUp end={data.main.temp.toFixed()} />°C</h1> : null}
              <div className="description">
                {data.weather ? <div className="des-and-icon" style={{ color: maincolor }}>
                  {data.weather[0].main === "Clear" ? <p className="weather-icon"><FiSun /></p> : null}
                  {data.weather[0].main === "Clouds" ? <p className="weather-icon"><BsCloudSun /></p> : null}
                  {data.weather[0].main === "Drizzle" ? <p className="weather-icon"><BsCloudRain /></p> : null}
                  {data.weather[0].main === "Fog" ? <p className="weather-icon"><BsCloudFog2 /></p> : null}
                  {data.weather[0].main === "Mist" ? <p className="weather-icon"><TbMist /></p> : null}
                  {data.weather[0].main === "Rain" ? <p className="weather-icon"><BsCloudDrizzle /></p> : null}
                  {data.weather[0].main === "Snow" ? <p className="weather-icon"><BsCloudSnow /></p> : null}
                  {data.weather[0].main === "Thunderstorm" ? <p className="weather-icon"><TbCloudStorm /></p> : null}
                  {data.weather[0].main === "Tornado" ? <p className="weather-icon"><TbTornado /></p> : null}
                  <p>{data.weather[0].main}</p>
                </div> : null}
              </div>
            </div>
          </div> : null}
        {data.main ? <div className="bottom">
          <div className="innerbot" style={{ color: maincolor }}>
            <div className="feelslike">
              <NavLink to="/temp-graph" className="nav-link">
                {data.main ? (<p className="bold"><CountUp end={data.main.feels_like.toFixed()} />°C</p>) : null}
                {data.main ? <p className="small"><TbTemperature />Feels like</p> : null}
              </NavLink>
            </div>
            <div className="humidity">
              <NavLink to="/humidity-graph" className="nav-link">
                {data.main ? (<p className="bold"><CountUp end={data.main.humidity} />%</p>) : null}
                {data.main ? <p className="small"><FiDroplet />Humidity</p> : null}
              </NavLink>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold"><CountUp end={data.wind.speed} /> m/s</p> : null}
              {data.main ? <p className="small"><BsWind />Wind</p> : null}
            </div>
            <div className="aqi">
              <NavLink to="/aqi-graph" className="nav-link">
                {data.wind ? <p className="bold"><CountUp end={aqiData} /> </p> : null}
                {data.main ? <p className="small"><BsWind />AQI</p> : null}
              </NavLink>
            </div>
            <div>
              {data.wind ? <p className="bold">{aqType}</p> : null}
            </div>
          </div>
        </div> : null}
      </div>
    </div>
  );
}

export default Home;
