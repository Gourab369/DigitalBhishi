import React from "react";
import "../ResetPassword.js";

function ForgetPassword(){
    return  <div className="grid-container col-7 offset-3 mt-5">
        <h3>Forget Password</h3>
       <div className="mb-3 row">
        <label for="username" className="col-sm-4 col-form-label">Aadhar Number</label>
        <div className="col-sm-6">
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
     <a class="btn btn-danger" href="resetPassword" role="button">Submit</a>
    </div>

   

</div>

}
export default ForgetPassword;