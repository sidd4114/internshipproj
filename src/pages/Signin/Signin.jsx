import React from 'react'
import './Signin.css'
const Signin = () => {
  return (
    <div className='signin-container'>
       
      <h1 className='theory1'>Signin to your PopX account</h1>
      <p className='theory2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit,</p>
    
      <form>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="login-button" disabled>
          Login
        </button>
      </form>
    </div>
  )
}

export default Signin
