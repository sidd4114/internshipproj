import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="main-container">
      <div className="content">
        <div className='contentpara'>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="button-container">
          <button className="button" id="button1">Create Account</button>
          <button className="button" id="button2">Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
