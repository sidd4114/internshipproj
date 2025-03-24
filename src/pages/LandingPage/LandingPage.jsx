import React from 'react';
import './LandingPage.css';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/details");
  };
  const handleLogin = () => {
    navigate("/signin");
  };
  return (
    <div className="main-container">
      <div className="content">
        <div className='contentpara'>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="button-container">
          <button className="button" id="button1" onClick={handleCreateAccount}>Create Account</button>
          <button className="button" id="button2" onClick={handleLogin}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
