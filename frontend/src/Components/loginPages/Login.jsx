import React,{useState} from "react";
import "./ForgetPassword";
import { useNavigate } from "react-router-dom";
import BaseLayout from "../BaseLayout";
import Footer from '../home/Footer';

const Login=()=>{
  const [navigateTo,setNavigateTo]=useState(0);
  const handleUserRadio=()=>{
    setNavigateTo(1)
  }
  const handleAdminRadio=()=>{
    setNavigateTo(2)
  }
  const navigator=useNavigate();
  const handleNav=()=>{
    if(navigateTo===1){
      navigator("/userHome")}
    else if(navigateTo===2){
      navigator("/adminHome")}
  }
  const Getotp=()=>{}
    return (
    <>
    <div className="row"> 
    <BaseLayout/>
    </div>

    <div>
    <div className="mt-5">&nbsp;</div>
    <div className="mt-5">&nbsp;</div>
    <div className="row col-4 offset-4 mt-5 mb-5 bg-light p-4 border">
      <form className="row g-3">
      <h3 className="text-center">Please Sign in</h3>
    <div className="col-12 d-flex flex-row">
    <img class="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/456/456212.png" style={{height: "20px", width: "20px"}}/>
    <input type="text" className="form-control" id="username"/>
    </div>
    <div className="col-12 d-flex flex-row">
    <img class="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" style={{height: "20px", width: "20px"}}/>
      <input type="password" className="form-control" id="inputPassword"/>
  </div>

  <div className="text-end mt-2 mb-1">
  <a href="forgetpassword" className="btn" style={{color:"blue"}}><h6>Forget password/Reset Password</h6></a>
  </div>

    <div className="row text-center">

      <div className="form-check col d-flex flex-row">
        <input className="form-check-input radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleAdminRadio}/>
        <div className="flex-row radiolabels">Admin</div>
      </div>

      <div className="form-check col d-flex flex-row">
        <input className="form-check-input radios" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleUserRadio} required  />
        <div className="flex-row radiolabels">User</div>
      </div>
    </div>

<div className="row mt-3 mb-2 ms-3" >
    <button type="button" className="btn btn-warning col-form flex-row col-4"onClick={Getotp}>Get OTP</button>
    <div className="col">
      <input type="text" className="form-control col-form-control col-8 flex-row" placeholder="Enter OTP"/>
    </div>
  </div>

<div className="col-12 mt-3 text-center">
    <button type="submit" className="btn btn-danger flex-row" onClick={handleNav}>Login</button>
    </div>  
      </form>
    </div>
    </div>

      <div className="row">
      <Footer/>
      </div>
</>
)

}

export default Login;