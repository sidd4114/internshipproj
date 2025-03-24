import React from 'react'
import './AccountSettings.css'
const AccountSettings = () => {
  return (
    <>

      <div className='header'>
        <p>Account Settings</p>
      </div>
      <div className='detailsdescription'>
        <div id="profsection">
        <img src="employee.png" type="jpg/png" id="empimg"></img>
        <div className='cameracon'>
        <img src="cameralens.png" id="cameralens"></img>
        </div>
        <div id="nameandmail">
          <h5>Marry Doe</h5>
          <p>Marry@Gmail.com</p>
        </div>
        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum architecto consequatur harum fugit deserunt, repellendus nostrum praesentium nobis optio dicta assumenda.</p>

      </div>
      <hr ></hr>
      <hr id="bottom-hr"></hr>
      </>
  )
}

export default AccountSettings
