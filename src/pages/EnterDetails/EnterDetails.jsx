import React from 'react'
import './EnterDetails.css'
import { useNavigate } from 'react-router-dom'

const EnterDetails = () => {
  const navigate = useNavigate();
  const gotosettings = (event) => {
    event.preventDefault();
    navigate("/settings");
  };
  return (
    <div className='detailscontainer'>
        <h1>Create your PopX account</h1>
        <form>
            
        <div className='formi'>
        <label>Full Name<span className='required'>*</span></label>
        <input type="text" placeholder="Marry Doe" />
        </div>

        <div className='formi'>
        <label>Phone Number<span className='required'>*</span></label>
        <input type="text" placeholder="Marry Doe" />
        </div>


        <div className='formi'>
        <label>Email Address<span className='required'>*</span></label>
        <input type="email" placeholder="Marry Doe" />
        </div>
        
        <div className='formi'>
        <label>Password<span className='required'>*</span></label>
        <input type="password" placeholder="Marry Doe" />
        </div>
        
        <div className='formi'>
        <label>Company Name</label>
        <input type="text" placeholder="Marry Doe" />
        </div>
        
        <label>Are you an Agency?<span className='required'>*</span></label>
        <div className="radio-group">
          <label>
            <input type="radio" name="agency" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="agency" value="no" /> No
          </label>
        </div>
        
        <button type="submit" className='createaccbut' onClick={gotosettings}>Create Account</button>
      </form>
    </div>
  )
}

export default EnterDetails

