import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import HumidityGraph from './components/graphs/HumidityGraph.js';
import TempGraph from './components/graphs/TempGraph.js';
import AQIGraph from './components/graphs/AQIGraph.js';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/temp-graph" element={<TempGraph />} />
      <Route path="/humidity-graph" element={<HumidityGraph />} />
      <Route path="/aqi-graph" element={<AQIGraph />} />
    </Routes>
    </>
  );
}

export default App;