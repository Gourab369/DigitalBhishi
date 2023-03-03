import React from 'react'
import UserNavbar from '../UserNavbar'
import backgroundImage from "./backdashboard.jpg"
const UserProfile=()=> {
    return (<>

    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw" // set a minimum height to make sure the image covers the entire screen
      }}>
 
      {<div>
      <div className='mt-3'>
          <UserNavbar/>
         
          <h1 style={{color:"red"}}>User Profile</h1>
           </div>

           <form>
              <h5>Personal Details</h5>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">First Name</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Rohan"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Middle Name</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Ashok"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Last Name</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Shintre"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="mobileNumber" class="col-sm-3 col-form-label">Mobile Number</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="mobileNumber" placeholder="0000000000"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Alternate Mobile</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="0000000000"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="customerAadhar" class="col-sm-3 col-form-label">Aadhar</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="customerAadhar" placeholder="000000000000"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">PAN</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="000000000000"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Street</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Paud Road"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Locality</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Rambaug Colony"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Village/City</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Pune"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Tahshil</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Pune"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">District</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Pune"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">State</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Maharashtra"/>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">Zip Code</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="411046"/>
                  </div>
                </div>

          </form>
              
    </div>   
  }
    </div>     
        </>
    )
}

export default UserProfile;
