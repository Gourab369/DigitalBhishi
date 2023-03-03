import React from "react";
import { useNavigate } from "react-router-dom";
import './BaseStyle.css'
import backgroundImage from "../homeback.jpg";

const Home=()=>{
    const navigate=useNavigate();
    
    function handleLogin(){
        navigate("/login");
    }

    function handleRegistration(){
        navigate("/registration");
    }

    return <div>
         <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw" // set a minimum height to make sure the image covers the entire screen
      }}>
        {<div><h1 style={{ color: 'red' }}>Welcome to Digital Bhishi</h1>
             <div className="col-6 displaymid mt-5 offset-3">
             <button type="button" className="btn btn-primary btn-lg me-4" onClick={handleLogin}>SIGN IN</button>
             <button type="button" className="btn btn-secondary btn-lg" onClick={handleRegistration}>SIGN UP</button>
             </div>
             </div>
        }
      </div>


    
       
    </div>

}

export default Home;