import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/loginPages/Login"
import ForgetPassword from './Components/loginPages/ForgetPassword';
import ResetPassword from './Components/loginPages/ResetPassword';
import Registration from "./Components/registrationPages/Registration"
import GeneratePassword from "./Components/registrationPages/GeneratePassword";
import Home from "./Components/Home"

import AdminHome from "./Components/admindashboard/AdminHome"
import AdminProfile from "./Components/admindashboard/AdminProfile"
import AdminCustomers from "./Components/admindashboard/AdminCustomers"
import AdminRequest from "./Components/admindashboard/AdminRequest"

import UserHome from "./Components/userDashboard/UserHome"
import UserProfile from "./Components/userDashboard/UserProfile"
import UserBhishi from "./Components/userDashboard/UserBhishi"
import UserLoan from "./Components/userDashboard/UserLoan"

import Login from "./Components/Login"
import Registration from "./Components/Registration"
import Home from "./Components/Home"
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import { Routes,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home/>}/>
<<<<<<< HEAD
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path="/generatePassword" element={<GeneratePassword/>}/>

        <Route path="/adminHome" element={<AdminHome/>}/>
        <Route path="/adminProfile" element={<AdminProfile/>}/>
        <Route path="/adminCustomers" element={<AdminCustomers/>}/>
        <Route path="/adminLogout" element={<Login/>}/>
        <Route path="/adminRequest" element={<AdminRequest/>}/>

        <Route path="/userHome" element={<UserHome/>}/>
        <Route path="/userLogout" element={<Login/>}/>
        <Route path="/userProfile" element={<UserProfile/>}/>
        <Route path="/userbhishi" element={<UserBhishi/>}/>
        <Route path="/userLoan" element={<UserLoan/>}/>

         
        
     
=======
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="forgetPassword" element={<ForgetPassword/>}/>
        <Route path="resetPassword" element={<ResetPassword/>}/>
>>>>>>> 9a2d2f6d46eb5888612288cb9c071b8c13bb6649
      </Routes>
    </div>
  );
}

export default App;
