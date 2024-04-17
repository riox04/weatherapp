import './index.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
