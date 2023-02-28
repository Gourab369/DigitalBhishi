import React, {useEffect, useState} from "react";
import axios from 'axios';

const Registration=()=>{
  const [otp, setOTP]= useState("");
  const [checkCustomerNumberExists , setCheckCustomerNumberExists] = useState("");
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
    tahashil:"",
    district:"",
    state:"",
    zipCode:"",
  });
  const handleFirstName=(e)=>{
    setDataToRegister({firstName:e.target.value})
  }
  const handleMiddleName=(e)=>{
    setDataToRegister(data=>data.middleName=e.target.value)
  }
  const handleLastName=(e)=>{
    setDataToRegister(data=>data.lastName=e.target.value)
  }
  const handlePrimaryNumber=(e)=>{
    setDataToRegister({primaryNumber:e.target.value})
  }
  const handleAlternateNumber=(e)=>{
    setDataToRegister(data=>data.alternateNumber=e.target.value)
  }
  const handleCustomerAadhar=(e)=>{
    setDataToRegister(data=>data.customerAadharNumber=e.target.value)
  }
  const handleGuarantor1Aadhar=(e)=>{
    setDataToRegister(data=>data.guarantor1AadharNumber=e.target.value)
  
  }
  const handleGuarantor2Aadhar=(e)=>{
    setDataToRegister(data=>data.guarantor2AadharNumber=e.target.value)
  
  }
  const handleStreet=(e)=>{
    setDataToRegister(data=>data.street=e.target.value)
  
  }
  const handleLocality=(e)=>{
    setDataToRegister(data=>data.locality=e.target.value)
  
  }
  const handleVillageOrCity=(e)=>{
    setDataToRegister(data=>data.villageOrCity=e.target.value)
  }
  const handleTahashil=(e)=>{
    setDataToRegister(data=>data.tahashil=e.target.value)
  
  }
  const handleDistrict=(e)=>{
    setDataToRegister(data=>data.district=e.target.value)
  
  }
  const handleState=(e)=>{
    setDataToRegister(data=>data.state=e.target.value)
  
  }
  const handleZipCode=(e)=>{
    setDataToRegister(data=>data.zipCode=e.target.value)
  
  }
  const handleOTP=(e)=>{
    setOTP(e.target.value)
  }
  const handleGetOTP=()=>{
    setCheckCustomerNumberExists(dataToRegister.primaryNumber);
    //if generate otp fails show error
  };

  useEffect(()=>{
    axios.post("http://localhost:8081/customerDetails/posttest",checkCustomerNumberExists)
    .then(response=>console.log(response.data))

  },[checkCustomerNumberExists]);

  const handleRegister=()=>{
    axios.post("http://localhost:8081/customerDetails/otp",otp)
    .then(response=>console.log(response.data))
  }


    return <div className="col-6 offset-3">
        <h3>Registration Details</h3>
        <form>
<h5>Personal Details</h5>
  <div className="form-group row">
    <label for="firstName" className="col-sm-5 col-form-label">First Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="firstName" placeholder="Rohan" onChange={handleFirstName} value={dataToRegister.firstName}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="middleName" className="col-sm-5 col-form-label">Middle Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="middleName" placeholder="Ashok" onChange={handleMiddleName} value={dataToRegister.middleName}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="lastName" className="col-sm-5 col-form-label">Last Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="lastName" placeholder="Shintre" onChange={handleLastName} value={dataToRegister.lastName}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="primaryNumber" className="col-sm-5 col-form-label">Mobile Number</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="primaryNumber" placeholder="0000000000" onChange={handlePrimaryNumber} value={dataToRegister.primaryNumber}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="alternateNumber" className="col-sm-5 col-form-label">Alternate Mobile</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="alternateNumber" placeholder="0000000000" onChange={handleAlternateNumber} value={dataToRegister.alternateNumber}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="customerAadhar" className="col-sm-5 col-form-label">Aadhar</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="customerAadhar" placeholder="000000000000" onChange={handleCustomerAadhar} value={dataToRegister.customerAadhar}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="guarantor1Aadhar" className="col-sm-5 col-form-label">Guarantor1 Aadhar</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="guarantor1Aadhar" placeholder="000000000000" onChange={handleGuarantor1Aadhar} value={dataToRegister.guarantor1Aadhar}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="guarantor2Aadhar" className="col-sm-5 col-form-label">Guarantor2 Aadhar</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="guarantor2Aadhar" placeholder="000000000000" onChange={handleGuarantor2Aadhar} value={dataToRegister.guarantor2Aadhar}/>
    </div>
  </div>

  <h5>Address</h5>
  <div className="form-group row">
    <label for="street" className="col-sm-5 col-form-label">Street</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="street" placeholder="Paud Road" onChange={handleStreet} value={dataToRegister.street}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="locality" className="col-sm-5 col-form-label">Locality</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="locality" placeholder="Rambaug Colony" onChange={handleLocality} value={dataToRegister.locality}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="villageOrCity" className="col-sm-5 col-form-label">Village/City</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="villageOrCity" placeholder="Pune" onChange={handleVillageOrCity} value={dataToRegister.villageOrCity}/>
    </div>
  </div>



  <div className="form-group row">
    <label for="tahshil" className="col-sm-5 col-form-label">Tahshil</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="tahshil" placeholder="Pune" onChange={handleTahashil} value={dataToRegister.tahashil}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="district" className="col-sm-5 col-form-label">District</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="district" placeholder="Pune" onChange={handleDistrict} value={dataToRegister.district}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="state" className="col-sm-5 col-form-label">State</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="state" placeholder="Maharashtra" onChange={handleState} value={dataToRegister.state}/>
    </div>
  </div>

  <div className="form-group row">
    <label for="zipCode" className="col-sm-5 col-form-label">Zip Code</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="zipCode" placeholder="411046" onChange={handleZipCode} value={dataToRegister.zipCode}/>
    </div>
  </div>

  <h5>Document Upload</h5>
  <div className="form-group row">
    <label for="customerAadharPic" className="col-sm-5 col-form-label">User Aadhar</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" id="customerAadharPic"/>
    </div>
  </div>

  <div className="form-group row">
    <label for="undertakingFormPic" className="col-sm-5 col-form-label">Undertaking Form</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" id="undertakingFormPic"/>
    </div>
  </div>

  <div className="form-group row">
    <label for="cattleCertificate" className="col-sm-5 col-form-label">Cattle certificate</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" id="cattleCertificate"/>
    </div>
  </div>

  <div className="form-group row">
    <label for="otherDocument1" className="col-sm-5 col-form-label">Other Document 1</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" id="otherDocument1"/>
    </div>
  </div>

  <div className="form-group row">
    <label for="otherDocument2" className="col-sm-5 col-form-label">Other Document 2</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" id="otherDocument2"/>
    </div>
  </div>

  <div className="form-group row">
    <label for="otherDocument3" className="col-sm-5 col-form-label">Other Document 3</label>
    <div className="col-sm-6">
    <input type="file" className="custom-file-input" id="otherDocument3"/>
    </div>
  </div>

  <div className="col-10 mb-3 row offset-2" >
    <button type="button" className="btn btn-warning col-sm-3 col-form" id="btnGetOTP" onClick={handleGetOTP}>Get OTP</button>
    <div className="col-sm-6">
      <input type="text" className="form-control col-form-control" placeholder="Enter OTP" onChange={handleOTP} value={otp}/>
    </div>
  </div>

  <div className="form-group row offset-4" >
    
    <div className="col-sm-10">
      <button type="button" className="btn btn-primary"  id="btnRegister" onClick={handleRegister}>Register</button>
    </div>
  </div>
</form>


    </div>
}
export default Registration;