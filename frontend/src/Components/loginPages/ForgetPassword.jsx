import React from "react";
import "./ResetPassword";
import '../BaseStyle.css'
import { useNavigate } from "react-router-dom";

const ForgetPassword=()=>{
  const navigator=useNavigate();
  function handleNav(){
    navigator("/resetPassword")
  }
    return  <div className="grid-container m-6 mt-5 offset-3 displaymid">
        <h3 className="displaymid">Forget Password</h3>
          <div className="mb-3 row displaymid">
        <label for="username" className="col-4 offset-1 form-label">Aadhar Number</label>
        <div className="col-6">
          <input type="text" className="form-control" id="username"/>
          </div>
        </div>

          <div className="col-10 mb-6 row offset-1" >
          <button type="button" className="btn btn-warning col-sm-3 col-form">Get OTP</button>
          <div className="col-sm-6 ">
      <input type="text" className="form-control col-form-control" placeholder="Enter OTP"/>
    </div>
  </div>

      <div className="col-4 mt-3 offset-4">
      <button className="btn btn-danger col-5" onClick={handleNav} type="button">Submit</button>
    </div>


</div>

}
export default ForgetPassword;