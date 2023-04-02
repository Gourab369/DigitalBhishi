import React from "react";

function Registration(){
    return <div className="col-6 offset-3">
        <h3>Registration Details</h3>
        <form>
<h5>Personal Details</h5>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">First Name</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Rohan"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Middle Name</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Ashok"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Last Name</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Shintre"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Mobile Number</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="0000000000"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Alternate Mobile</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="0000000000"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Aadhar</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="000000000000"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Guarantor1 Aadhar</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="000000000000"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Guarantor2 Aadhar</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="000000000000"/>
    </div>
  </div>

  <h5>Address</h5>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Street</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Paud Road"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Locality</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Rambaug Colony"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Village/City</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Pune"/>
    </div>
  </div>



  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Tahshil</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Pune"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">District</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Pune"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">State</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Maharashtra"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Zip Code</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="411046"/>
    </div>
  </div>

  <h5>Document Upload</h5>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">User Aadhar</label>
    <div class="col-sm-6">
    <input type="file" class="custom-file-input" id="inputGroupFile01"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Undertaking Form</label>
    <div class="col-sm-6">
    <input type="file" class="custom-file-input" id="inputGroupFile01"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Cattle certificate</label>
    <div class="col-sm-6">
    <input type="file" class="custom-file-input" id="inputGroupFile01"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Other Document 1</label>
    <div class="col-sm-6">
    <input type="file" class="custom-file-input" id="inputGroupFile01"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Other Document 2</label>
    <div class="col-sm-6">
    <input type="file" class="custom-file-input" id="inputGroupFile01"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-5 col-form-label">Other Document 3</label>
    <div class="col-sm-6">
    <input type="file" class="custom-file-input" id="inputGroupFile01"/>
    </div>
  </div>

  <div className="col-10 mb-3 row offset-2" >
    <button type="button" className="btn btn-warning col-sm-3 col-form">Get OTP</button>
    <div className="col-sm-6">
      <input type="text" className="form-control col-form-control" placeholder="Enter OTP"/>
    </div>
  </div>

  <div class="form-group row offset-4" >
    
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Register</button>
    </div>
  </div>
</form>


    </div>
}
export default Registration;