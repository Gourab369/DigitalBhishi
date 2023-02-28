import React from "react";
import { useNavigate } from "react-router-dom";
import './BaseStyle.css'

const Home=()=>{
    const navigate=useNavigate();
    
    function handleLogin(){
        navigate("/login");
    }

    function handleRegistration(){
        navigate("/registration");
    }

    return <div className="grid-container col-7 offset-3 mt-5 displaymid">
        <h1>Welcome to Digital Bhishi</h1>
        <div className="col-6 displaymid">
        <button type="button" className="btn btn-primary btn-lg me-4" onClick={handleLogin}>SIGN IN</button>
        <button type="button" className="btn btn-secondary btn-lg" onClick={handleRegistration}>SIGN UP</button>
        </div>
    </div>

}

export default Home;