import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
  <div style={{ position: 'relative' }}>
    <img
      className="d-block w-100"
      src="../images/slider-1.jpg"
      alt="First slide"
    />
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '20%',
        right:'30%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(40,58,96,0.7)',
        color: '#fff',
        padding: '20px',
        borderRadius: '20px',
        textAlign:'left',
        marginLeft:'100px',
      }}
    >
      <h3 className="sliderText">Join the Community</h3>
      <p>One community, endless opportunities.</p>
      <button className ="sliderButton"> LOG-IN </button>
    </div>
  </div>
</Carousel.Item>

      <Carousel.Item>
      <div style={{ position: 'relative' }}>
    <img
      className="d-block w-100"
      src="../images/slider-2.jpg"
      alt="First slide"
    />
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '10%',
        right:'10%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(40,58,96,0.7)',
        color: '#fff',
        padding: '20px',
        borderRadius: '20px',
        textAlign:'left',
        marginLeft:'400px',
      }}
    >
      <h3 className="sliderText">Job Opportunities.</h3>
      <p>Create a better future for yourself.</p>
      <div classNames="jobButtons">
      <button className ="sliderButton"> FULL-TIME </button>
      <button className ="sliderButton"> FREELANCE</button>
      </div>
    </div>
  </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{ position: 'relative' }}>
    <img
      className="d-block w-100"
      src="../images/slider-3.jpg"
      alt="First slide"
    />
    <div style={{
        position: 'absolute',
        top: '50%',
        left: '25%',
        right:'15%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(40,58,96,0.7)',
        color: '#fff',
        padding: '20px',
        borderRadius: '20px',
        textAlign:'left',
        marginLeft:'100px',
      }}
    >
      <h3 className="sliderText">Connect with Kodego</h3>
      <p>Learn to Code. Join Kodego today.</p>
      <div classNames="jobButtons">
      <button className ="sliderButton1"> CONNECT WITH US </button>
      </div>
    </div>
  </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
