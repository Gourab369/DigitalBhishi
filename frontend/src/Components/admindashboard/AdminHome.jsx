import React from 'react'
import Navbar from '../Navbar'
import backgroundImage from "./backdashboard.jpg"
const AdminHome=()=> {
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
          <Navbar/>
          <h1 style={{color:"red"}}>Welcome</h1> 
          <h1 style={{color:"red"}}>Admin Home</h1> 
      </div>
        
      
  }
    </div>
        
        </>
    )
}

export default AdminHome
