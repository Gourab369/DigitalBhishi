import React from "react";
import { useNavigate } from "react-router-dom";

import Slider from './Slider'
import Footer from './Footer'
import BaseLayout from '../BaseLayout'
const Home=()=>{
    const navigate=useNavigate();
    
    function handleLogin(){
        navigate("/login");
    }

    function handleRegistration(){
        navigate("/registration");
    }

    return <> <div className="row">
                  <BaseLayout/>
                </div>
                <hr />
                <div className="row ">
                  <Slider/>
                </div>
                <div className="row">
                  <Footer/>
                </div>
          </>

}

export default Home;