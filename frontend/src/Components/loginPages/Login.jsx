import React,{useRef, useEffect, useState} from "react";
import useAuth from '../../hooks/useAuth'

import "./ForgetPassword";
import { Link, useLocation ,useNavigate } from "react-router-dom";
import BaseLayout from "../BaseLayout";
import Footer from '../home/Footer';
import http from '../../httpCommon'

import '../adminDashboard/AdminHome.jsx'
import '../userDashboard/UserHome'

const Login=()=>{
  const {setAuth}= useAuth();
  const errRef = useRef()

  const navigate= useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const [toDisable, setToDisable]=useState(false);

  const adminURL='/customerDetails/verifyAdmin'
  const customerURL = '/customerDetails/verifyCustomer'
  const generateOtpURL ='cusotmerDetails/generateOtp'

  const [sessionId, setSessionId] = useState('')
  const [userExist, setUserExist] = useState(false)

  const [roles, setRoles] = useState(0);
  const  [username, setUser]=useState({username:''});
  const  [password, setPassword]=useState({password:''});
  const [otp, setOtp]=useState({otp:''});
  const  [error, setError]=useState('');


  useEffect(()=>{
    setError('');
  },[username, password])

  const onUserChange=(e)=>{
    setUser({username: e.target.value})
  }
  const onPassChange=(e)=>{
    setPassword({password: e.target.value})
  }
  const onOtpChange=(e)=>{
    setOtp({otp: e.target.value})
  }

  const getOTP=()=>{
    setToDisable(true);
    http.post(generateOtpURL, username)
    .then(response=>{
      setUserExist(response.data)
      console.log('user exist: ' +response.data)
    })
    .catch(error=>console.log(error))

    if(!userExist){
      alert("You does not exist\n Please Use a registerd number!!!")
    }else alert('Otp generated\n Please enter the otp to Login')
  }

const handleLogin=()=>{
  //admin
  if(roles===1988){
    http.post(adminURL, {number: username.username, password: password.password})
    .then(response=>{
      setSessionId(response?.data?.sessionId)
      console.log(response?.data)      
      setAuth({ username, password, roles, sessionId })

    })
    .catch(error=>{
      setError(error)
      console.log(error)})


  }
  //customer
  else if(roles===3002){
    http.post(customerURL, {number: username.username, password: password.password})
    .then(response=>{
      setSessionId(response?.data?.sessionId)
      console.log(response.data)

      setAuth({ username, password, roles, sessionId })

    })
    .catch(error=>{
      setError(error)
      console.log(error)})
  }
  console.log(username, password);
  setUser({username:''})
  setPassword({password:''})
  setOtp({otp:''})
  navigate(from , {replace: true});
}
    
    return (<>
      <section>
  <div className="row"> 
  <BaseLayout/>
  </div>
  <div>
    <div className="mt-5">&nbsp;</div>
    <div className="mt-5">&nbsp;</div>
  <div className="row col-4 offset-4 mt-5 mb-5 bg-light p-4 border">
    <form className="row g-3">
    <span ref={errRef} className={error?"errmsg":"offscreen"} aria-live="assertive">{error}</span>
    <h3 className="text-center">Please Sign in</h3>
    <fieldset id="toDisable" disabled={toDisable}>
  
  <div className="col-12 d-flex flex-row">
  <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/456/456212.png" style={{height: "20px", width: "20px"}}/>
  <input type="text" className="form-control mb-3" name="userNumber" onChange={onUserChange} value={username.username}/>
  </div>
  <div className="col-12 d-flex flex-row">
  <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" style={{height: "20px", width: "20px"}}/>
    <input type="password" className="form-control" name="password" onChange={onPassChange} value={password.password}/>
</div>

<div className="text-end mt-2 mb-1">
<a href="forgetpassword" className="btn" style={{color:"blue"}}><h6>Forget password/Reset Password</h6></a>
</div>

  <div className="row text-center">

    <div className="form-check col d-flex flex-row">
      <input className="form-check-input radios" type="radio" name="role" id="flexRadioDefault1" onChange={()=>setRoles(true)} />
      <div className="flex-row radiolabels">Admin</div>
    </div>

    <div className="form-check col d-flex flex-row">
      <input className="form-check-input radios" type="radio" name="role" id="flexRadioDefault2" onChange={()=>setRoles(false)} required />
      <div className="flex-row radiolabels">User</div>
    </div>

  </div>
  </fieldset>
<div className="row mt-3 mb-2 ms-3" >
  <button type="button" className="btn btn-warning col-form flex-row col-4"onClick={getOTP}>Get OTP</button>
  <div className="col">
    <input type="text" className="form-control col-form-control col-8 flex-row" placeholder="Enter OTP" onChange={onOtpChange} value={otp.otp}/>
  </div>
</div>

<div className="col-12 mt-3 text-center">
  <button type="button" className="btn btn-danger flex-row" onClick={handleLogin}>Login</button>
  </div>  
    </form>
    </div>
</div>
    <div className="row">
    <Footer/>
    </div>
</section>
</>
)

}

export default Login;