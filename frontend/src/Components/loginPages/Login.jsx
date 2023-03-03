import React,{useState} from "react";
import "./ForgetPassword";
import '../BaseStyle.css'
import { useNavigate } from "react-router-dom";

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
    return (<div> 

    <div className="grid-container col-7 offset-3 mt-5 displayhori">
      <h3 className="displaymid">Please Sign in</h3>
      <div className="mb-3 row">
    <label for="username" className="col-sm-3 col-form-label">User Name</label>
    <div className="col-sm-6">
    <input type="text" className="form-control" id="username"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-3 col-form-label">Password</label>
    <div className="col-sm-6">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>

  <div className="endalign">
  <a href="forgetpassword"><h6>Forget password</h6></a>
  </div>

    <div className="offset-1 col-1">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleAdminRadio} />
        Admin
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleUserRadio} required/>
        User
      </div>
    </div>

<div className="col-10 mb-3 row offset-1 displaymid mt-3" >
    <button type="button" className="btn btn-warning col-sm-3 col-form displaytenper"onClick={Getotp}>Get OTP</button>
    <div className="col-sm-6">
      <input type="text" className="form-control col-form-control ms-3" placeholder="Enter OTP"/>
    </div>
  </div>

<div className="col-5 mt-3 displaymid">
    <button type="submit" className="btn btn-danger col-2" onClick={handleNav}>Login</button>
    </div>  

      </div>
</div>)

}

export default Login;