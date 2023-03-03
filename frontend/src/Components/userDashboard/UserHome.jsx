import React from 'react'
import UserNavbar from '../UserNavbar'
import backgroundImage from "./backdashboard.jpg"
const UserHome=()=> {
    return (<>

<div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw" // set a minimum height to make sure the image covers the entire screen
      }}>
 
      {
      <div className='mt-3'>
          <UserNavbar/>
          <h1 style={{color:"red"}}>Welcome</h1> 
          <h1 style={{color:"red"}}>User Home</h1> 
        
      </div>
        
      
  }
    </div>
        
        </>
    )
}

export default UserHome
