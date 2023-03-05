import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import Slider from './Slider'
import Footer from './Footer'

const Home=()=>{
    const navigate=useNavigate();
    
    function handleLogin(){
        navigate("/login");
    }

    function handleRegistration(){
        navigate("/registration");
    }

    return <>
            <div className="container-fluid bgimage">
                <div className="title row">
                  <div className="titlebar col mb-2">
                  <img className="titlelogo" src="coinlogo.jpg" />Digital Bhishi</div>
                </div>
                <div className="row buttons col-7">|
                  <button type="button" className="col btn" >HOME</button>|
                  <button type="button" className="col btn" onClick={handleLogin}>SIGN IN</button>|
                  <button type="button" className="col btn" onClick={handleRegistration}>SIGN UP</button>|
                  <button type="button" className="col btn" >ABOUT</button>|
                  <button type="button" className="col btn" >CONTACT US</button>|
                </div>
                <div className="row">
                <Slider/>
                </div>
                <div className="row footer">
                <Footer/>
                </div>

            </div>
          </>

}

export default Home;