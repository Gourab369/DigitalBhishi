import React, {useEffect, useState} from "react";
import "./GeneratePassword";
import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import http from '../httpCommon';
import ValidationResult from './Validations'

const Registration=()=>{
  const navigator=useNavigate();
  function handleNav(){
    navigator("/generatePassword")}
  const [otp, setOTP]= useState({
    otp:""
  });
  const [checkCustomerNumberExists , setCheckCustomerNumberExists] = useState({
    number:""
  });
  var [dataToRegister, setDataToRegister] = useState({
    firstName:"",
    middleName:"",
    lastName:"",
    primaryNumber:"",
    alternateNumber:"",
    customerAadhar:"",
    guarantor1Aadhar:"",
    guarantor2Aadhar:"",
    street:"",
    locality:"",
    villageOrCity:"",
    tahsil:"",
    district:"",
    state:"",
    zipCode:"",
  });

  const onChange = (e)=> {
    setDataToRegister({...dataToRegister, [e.target.name]: e.target.value});
    }

    const handleOTP=(e)=>{
      setOTP({otp:e.target.value})
    }

  const [toDisable,setToDisable]=useState(false);// entry field
  const [postPermission, setPostPermission]=useState(false);// permission for otp and dat posting
  const handleGetOTP=()=>{
    setCheckCustomerNumberExists({number : dataToRegister.primaryNumber});
    setToDisable(true);
    console.log(dataToRegister)
  };
  useEffect(()=>{
    http.post("/customerDetails/checkNumber",checkCustomerNumberExists)//change url afterwards
    .then(response=>setPostPermission(response.data))//postPermisison source will only set when 

    .catch(err=>console.log(err))

    if(postPermission){
      triggerUserExistError()
      setToDisable(false)// entry fields editable
    }else triggerCorrect()
  },[checkCustomerNumberExists])
  
  const triggerUserExistError=()=>{
  
  }

  const triggerCorrect=()=>{

  }
  const [otpVerified, setOtpVerified]=useState(true);//tochange to false default
  const  handleRegister=()=>{
    if(true){//to change to postPermisison
      http.post("/customerDetails/otp",otp)//change url afterwards
      .then(response=>console.log(response.data))//use setOtpVerified here
      .catch(err=>console.log(err))
      
      const dataConfirmation = window.confirm(
        "Name --> "+ dataToRegister.firstName+" "+dataToRegister.middleName+" "+dataToRegister.lastName+"\n"+
        "Aadhar --> "+dataToRegister.customerAadhar+"\n"+
        "Number --> "+dataToRegister.primaryNumber+"\n"+
        "Alternate Number --> "+dataToRegister.alternateNumber+"\n"+
        "Guarantor 1 Aadhar --> "+dataToRegister.guarantor1Aadhar+"\n"+
        "Guarantor 2 Aadhar --> "+dataToRegister.guarantor2Aadhar+"\n"+
        "Address --> "+dataToRegister.street+", "+dataToRegister.locality+", "+dataToRegister.villageOrCity+", "+dataToRegister.district+", "+dataToRegister.tahsil+", "+dataToRegister.state+", "+dataToRegister.zipCode+", "+"\n"
      ); // popup data

      if(otpVerified&&dataConfirmation){
        http.post("/customerDetails/postData",dataToRegister)//change url afterwards
        .then(response=>console.log(response.data))//if true 
        .catch(err=>console.log(err))
        //show registered message
        window.alert("Your Data has been saved")
        navigator("/")
      }else{
        setToDisable(false)// entry fields editable
        invalidOtpError();
      }
    }else triggerUserExistError();
  }
  const invalidOtpError=()=>{

  }
  const [determineWhatToShow,setDetermineWhatToShow]=useState(0);
  
    return <div className="col-6 offset-3">
        <h3>Registration Details</h3>
        <form className="needs-validation">
        <fieldset id="toDisable" disabled={toDisable}>
<h5>Personal Details</h5>
  <div className="form-group row">
    <label for="firstName" className="col-sm-5 col-form-label">First Name</label>
    <div className="col-sm-6">
      <input type="text" id="" className="form-control" name="firstName" placeholder="Rohan" onChange={onChange} value={dataToRegister.firstName} required/>
    <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="middleName" className="col-sm-5 col-form-label">Middle Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="middleName" placeholder="Ashok" onChange={onChange} value={dataToRegister.middleName}/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="lastName" className="col-sm-5 col-form-label">Last Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="lastName" placeholder="Shintre" onChange={onChange} value={dataToRegister.lastName} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="primaryNumber" className="col-sm-5 col-form-label">Mobile Number</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="primaryNumber" placeholder="0000000000" onChange={onChange} value={dataToRegister.primaryNumber} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="alternateNumber" className="col-sm-5 col-form-label">Alternate Mobile</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="alternateNumber" placeholder="0000000000" onChange={onChange} value={dataToRegister.alternateNumber}/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="customerAadhar" className="col-sm-5 col-form-label">Aadhar</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="customerAadhar" placeholder="000000000000" onChange={onChange} value={dataToRegister.customerAadhar} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="guarantor1Aadhar" className="col-sm-5 col-form-label">Guarantor1 Aadhar</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="guarantor1Aadhar" placeholder="000000000000" onChange={onChange} value={dataToRegister.guarantor1Aadhar} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="guarantor2Aadhar" className="col-sm-5 col-form-label">Guarantor2 Aadhar</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="guarantor2Aadhar" placeholder="000000000000" onChange={onChange} value={dataToRegister.guarantor2Aadhar} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <h5>Address</h5>
  <div className="form-group row">
    <label for="street" className="col-sm-5 col-form-label">Street</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="street" placeholder="Paud Road" onChange={onChange} value={dataToRegister.street} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="locality" className="col-sm-5 col-form-label">Locality</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="locality" placeholder="Rambaug Colony" onChange={onChange} value={dataToRegister.locality} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="villageOrCity" className="col-sm-5 col-form-label">Village/City</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="villageOrCity" placeholder="Pune" onChange={onChange} value={dataToRegister.villageOrCity} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>



  <div className="form-group row">
    <label for="tahsil" className="col-sm-5 col-form-label">tahsil</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="tahsil" placeholder="Pune" onChange={onChange} value={dataToRegister.tahsil} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="district" className="col-sm-5 col-form-label">District</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="district" placeholder="Pune" onChange={onChange} value={dataToRegister.district} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="state" className="col-sm-5 col-form-label">State</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="state" placeholder="Maharashtra" onChange={onChange} value={dataToRegister.state} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="zipCode" className="col-sm-5 col-form-label">Zip Code</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="zipCode" placeholder="411046" onChange={onChange} value={dataToRegister.zipCode} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <h5>Document Upload</h5>
  <div className="form-group row">
    <label for="customerAadharPic" className="col-sm-5 col-form-label">User Aadhar</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" name="customerAadharPic"/>
    <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="undertakingFormPic" className="col-sm-5 col-form-label">Undertaking Form</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" name="undertakingFormPic"/>
    <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="cattleCertificate" className="col-sm-5 col-form-label">Cattle certificate</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" name="cattleCertificate"/>
    <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="otherDocument1" className="col-sm-5 col-form-label">Other Document 1</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" name="otherDocument1"/>
    <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="otherDocument2" className="col-sm-5 col-form-label">Other Document 2</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" name="otherDocument2"/>
    <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="otherDocument3" className="col-sm-5 col-form-label">Other Document 3</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" name="otherDocument3"/>
    <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>
</fieldset>
  <div className="col-10 mb-3 row offset-2" >
    <button type="button" className="btn btn-warning col-sm-3 col-form" name="btnGetOTP" onClick={handleGetOTP}>Get OTP</button>
    <div className="col-sm-6">
      <input type="text" className="form-control col-form-control" placeholder="Enter OTP" onChange={handleOTP} value={otp.otp} required/>
      <ValidationResult condition={determineWhatToShow}/>
    </div>
  </div>

  <div className="form-group row offset-4" >
    
   <div class="col-sm-10">
      <button type="submit" class="btn btn-primary" onClick={handleNav}>Register</button>
    <div className="col-sm-10">
      <button type="button" className="btn btn-primary"  name="btnRegister" onClick={handleRegister}>Register</button>
    </div>
  </div>
  </div>
        </form>
    </div>
}
export default Registration;