import React, {useEffect, useState} from "react";
import "./GeneratePassword";
import { useNavigate } from "react-router-dom";
import http from '../../httpCommon';
import BaseLayout from "../BaseLayout";
import Footer from '../home/Footer';
import {ValidationResult, ValidateTextFields , ValidateAadharNumberFields, ValidatePhoneNumberFields, ValidateZipCodeFields} from '../Validations';

const Registration=()=>{
  
  const navigator=useNavigate();
  
  
  function handleNav(){
    navigator("/generatePassword")
  }


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
  
  
  const [postPermission, setPostPermission]=useState(false);// permission for otp and data posting


  const handleGetOTP=()=>{
    if(checkAllFieldsValidated===true){
    setCheckCustomerNumberExists({number : dataToRegister.primaryNumber});
    setToDisable(true);
    console.log(dataToRegister)//display debugging purposess
    }
  };
  useEffect(()=>{
    http.post("/customerDetails/checkNumber",checkCustomerNumberExists)//change url afterwards
    .then(response=>setPostPermission(response.data))//postPermisison source will only set when 
    .catch(err=>console.log(err))

    if(!postPermission){
      triggerUserExistError()
      setToDisable(false)// entry fields editable
    }else triggerCorrect()
  },[checkCustomerNumberExists])
  
  const triggerUserExistError=()=>{
  
  }

  const triggerCorrect=()=>{

  }
  const [otpVerified, setOtpVerified]=useState(false);//tochange to false default


  const  handleRegister=()=>{
    if(postPermission){//to change to postPermisison
      http.post("/customerDetails/otp",otp)//change url afterwards
      .then(response=>{
        setOtpVerified(response.data)
        console.log(response.data)})//use setOtpVerified here
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
  
  const [validationStatus, setValidationStatus] = useState({
    firstName:0,
    middleName:0,
    lastName:0,
    primaryNumber:0,
    alternateNumber:0,
    customerAadhar:0,
    guarantor1Aadhar:0,
    guarantor2Aadhar:0,
    zipCode:0,
    customerAadharPic:0,
    undertakingFormPic:0,
    cattleCertificate:0,
    otherDocument1:0,
    otherDocument2:0,
    otherDocument3:0,
  });
  
  var validity=0;
  const onBlur = (e)=> {
    if(e.target.name==="firstName"||e.target.name==="middleName"||e.target.name==="lastName"){
      validity=ValidateTextFields(e.target.value);
    }else if(e.target.name==="primaryNumber"||e.target.name==="alternateNumber"){
      validity=ValidatePhoneNumberFields(e.target.value);
    }else if(e.target.name==="customerAadhar"||e.target.name==="guarantor1Aadhar"||e.target.name==="guarantor2Aadhar"){
      validity=ValidateAadharNumberFields(e.target.value);
    }else if(e.target.name==="zipCode"){
      validity=ValidateZipCodeFields(e.target.value)
    }
    setValidationStatus({...validationStatus, [e.target.name]:validity})
  }
  const checkAllFieldsValidated=()=>{
    if(validationStatus.firstName===1&&validationStatus.middleName<2&&validationStatus.lastName===1&&validationStatus.customerAadhar===1&&validationStatus.primaryNumber===1&&validationStatus.alternateNumber<2&&validationStatus.guarantor1Aadhar===1&&validationStatus.guarantor2Aadhar===1&&validationStatus.zipCode===1&&validationStatus.cattleCertificate===1&&validationStatus.undertakingFormPic===1&&validationStatus.customerAadharPic===1&&validationStatus.otherDocument1<2&&validationStatus.otherDocument2<2&&validationStatus.otherDocument3<2){
      return true;
    }return false;
  }
    // Registration from display
    return(<>
      <div className="row">
        <BaseLayout/>
      </div>

      <div>
        <div className="mt-5">&nbsp;</div>
        <div className="mt-5">&nbsp;</div>
      <div className="row col-6 offset-3 mt-5 mb-5 bg-light p-4 border">
        <h3><strong>Registration Details</strong></h3>
        <form className="needs-validation">
        <fieldset id="toDisable" disabled={toDisable}>
                  <h5><b>Personal Details</b></h5>
                    <div className="form-group row">
                      <label for="firstName" className="col-sm-5 col-form-label">First Name</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="firstName" placeholder="Rohan" onBlur={onBlur} onChange={onChange} value={dataToRegister.firstName} required/>
                      <ValidationResult condition={validationStatus.firstName}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="middleName" className="col-sm-5 col-form-label">Middle Name</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="middleName" placeholder="Ashok" onBlur={onBlur} onChange={onChange} value={dataToRegister.middleName}/>
                        <ValidationResult condition={validationStatus.middleName}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="lastName" className="col-sm-5 col-form-label">Last Name</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="lastName" placeholder="Shintre" onBlur={onBlur} onChange={onChange} value={dataToRegister.lastName} required/>
                        <ValidationResult condition={validationStatus.lastName}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="primaryNumber" className="col-sm-5 col-form-label">Mobile Number</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="primaryNumber" placeholder="0000000000" onBlur={onBlur} onChange={onChange} value={dataToRegister.primaryNumber} required/>
                        <ValidationResult condition={validationStatus.primaryNumber}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="alternateNumber" className="col-sm-5 col-form-label">Alternate Mobile</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="alternateNumber" placeholder="0000000000" onBlur={onBlur} onChange={onChange} value={dataToRegister.alternateNumber}/>
                        <ValidationResult condition={validationStatus.alternateNumber}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="customerAadhar" className="col-sm-5 col-form-label">Aadhar</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="customerAadhar" placeholder="000000000000" onBlur={onBlur} onChange={onChange} value={dataToRegister.customerAadhar} required/>
                        <ValidationResult condition={validationStatus.customerAadhar}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="guarantor1Aadhar" className="col-sm-5 col-form-label">Guarantor1 Aadhar</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="guarantor1Aadhar" placeholder="000000000000" onBlur={onBlur} onChange={onChange} value={dataToRegister.guarantor1Aadhar} required/>
                        <ValidationResult condition={validationStatus.guarantor1Aadhar}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="guarantor2Aadhar" className="col-sm-5 col-form-label">Guarantor2 Aadhar</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="guarantor2Aadhar" placeholder="000000000000" onBlur={onBlur} onChange={onChange} value={dataToRegister.guarantor2Aadhar} required/>
                        <ValidationResult condition={validationStatus.guarantor2Aadhar}/>
                      </div>
                    </div>

                    <h5><b>Address</b></h5>
                    <div className="form-group row">
                      <label for="street" className="col-sm-5 col-form-label">Street</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="street" placeholder="Paud Road" onBlur={onBlur} onChange={onChange} value={dataToRegister.street} required/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="locality" className="col-sm-5 col-form-label">Locality</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="locality" placeholder="Rambaug Colony" onBlur={onBlur} onChange={onChange} value={dataToRegister.locality} required/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="villageOrCity" className="col-sm-5 col-form-label">Village/City</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="villageOrCity" placeholder="Pune" onBlur={onBlur} onChange={onChange} value={dataToRegister.villageOrCity} required/>
                      </div>
                    </div>



                    <div className="form-group row">
                      <label for="tahsil" className="col-sm-5 col-form-label">Tahsil</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="tahsil" placeholder="Pune" onBlur={onBlur} onChange={onChange} value={dataToRegister.tahsil} required/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="district" className="col-sm-5 col-form-label">District</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="district" placeholder="Pune" onBlur={onBlur} onChange={onChange} value={dataToRegister.district} required/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="state" className="col-sm-5 col-form-label">State</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="state" placeholder="Maharashtra" onBlur={onBlur} onChange={onChange} value={dataToRegister.state} required/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="zipCode" className="col-sm-5 col-form-label">Zip Code</label>
                      <div className="col-sm-6">
                        <input type="text" className="form-control" name="zipCode" placeholder="411046" onChange={onChange} value={dataToRegister.zipCode} required/>
                        <ValidationResult condition={validationStatus.zipCode}/>
                      </div>
                    </div>

                    <h5><b>Document Upload</b></h5>
                    <div className="form-group row">
                      <label for="customerAadharPic" className="col-sm-5 col-form-label">User Aadhar</label>
                      <div className="col-sm-6">
                      <input type="file" className="custom-file-input" name="customerAadharPic"/>
                      <ValidationResult condition={validationStatus.customerAadharPic}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="undertakingFormPic" className="col-sm-5 col-form-label">Undertaking Form</label>
                      <div className="col-sm-6">
                      <input type="file" className="custom-file-input" name="undertakingFormPic"/>
                      <ValidationResult condition={validationStatus.undertakingFormPic}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="cattleCertificate" className="col-sm-5 col-form-label">Cattle certificate</label>
                      <div className="col-sm-6">
                      <input type="file" className="custom-file-input" name="cattleCertificate"/>
                      <ValidationResult condition={validationStatus.cattleCertificate}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="otherDocument1" className="col-sm-5 col-form-label">Other Document 1</label>
                      <div className="col-sm-6">
                      <input type="file" className="custom-file-input" name="otherDocument1"/>
                      <ValidationResult condition={validationStatus.otherDocument1}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="otherDocument2" className="col-sm-5 col-form-label">Other Document 2</label>
                      <div className="col-sm-6">
                      <input type="file" className="custom-file-input" name="otherDocument2"/>
                      <ValidationResult condition={validationStatus.otherDocument2}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label for="otherDocument3" className="col-sm-5 col-form-label">Other Document 3</label>
                      <div className="col-sm-6">
                      <input type="file" className="custom-file-input" name="otherDocument3"/>
                      <ValidationResult condition={validationStatus.otherDocument3}/>
                      </div>
                    </div>
                  </fieldset>
                    <div className="col-10 mb-3 row offset-2" >
                      <button type="button" className="btn btn-warning col-sm-3 col-form" name="btnGetOTP" onClick={handleGetOTP}>Get OTP</button>
                      <div className="col-sm-6">
                        <input type="text" className="form-control col-form-control" name="otp" placeholder="Enter OTP" onChange={handleOTP} value={otp.otp} required/>
                      </div>
                    </div>

                    <div className="form-group row offset-4" >
                      
                      <div class="col-sm-10">
                        <button type="button" className="btn btn-primary"  name="btnRegister" onClick={handleRegister}>Register</button>
                    </div>
                    </div>
        </form>
      </div>
      </div>
                       
      <div className="row mt-5">
        <Footer/>
      </div>
      
       </>)
}
export default Registration;