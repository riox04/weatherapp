import './About.css';
import React from 'react';

function About() {
  return (
    <>
    <div className='aapp'>
      <div className='atop'>
        <h1>About</h1>
        <br></br><br></br><br></br>
        <p>This website was created by Saranyo Ray for the course BCSE203E-Web Programming. The objective of this miniproject is to
          develop a comprehensive understanding of the importance of monitoring air quality,
          and to create a platform for continuous monitoring using the Air Quality Index (AQI).
          Through this project, we aim to:
          <br></br><br></br>
          <ul>
            <li>Raise awareness about the significance of air and water quality to human health and the environment.</li>
            <li>Implement a system for real-time monitoring and analysis of air and water quality data.</li>
            <li>Develop the ability to interpret AQI values and communicate them effectively to stakeholders.</li>
            <li>Explore solutions and strategies for addressing air and water pollution through data-driven insights.</li>
            <li>Demonstrate the potential impact of proactive environmental monitoring on public health and sustainability.</li>
          </ul>
        </p>
      </div>
    </div>
    </>
  );
}

export default About;
