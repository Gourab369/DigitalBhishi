import React from "react";
import "./ForgetPassword.js";


function Login(){
    return <div className="grid-container col-7 offset-3 mt-5">
       <h3>Please Sign in</h3>
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

  <div className="col-3 offset-6">
  <a href="forgetpassword"><h6>Forget password</h6></a>
  </div>

    <div clssName="col-6">
  <div class="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Admin
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" for="flexRadioDefault2">
    User
  </label>
</div>
</div>

<div className="col-10 mb-3 row offset-2" >
    <button type="button" className="btn btn-warning col-sm-3 col-form"onClick={Getotp}>Get OTP</button>
    <div className="col-sm-6">
      <input type="text" className="form-control col-form-control" placeholder="Enter OTP"/>
    </div>
  </div>

<div className="col-4 mt-3 offset-4">  
    <button type="submit" class="btn btn-danger">Submit</button>
</div>
 
    </div>



function Getotp(){
    
}
}

export default Login;