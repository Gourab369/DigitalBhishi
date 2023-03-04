import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/loginPages/Login"
import ForgetPassword from './Components/loginPages/ForgetPassword';
import ResetPassword from './Components/loginPages/ResetPassword';
import Registration from "./Components/registrationPages/Registration"
import GeneratePassword from "./Components/registrationPages/GeneratePassword";
import Home from "./Components/Home"

import AdminHome from "./Components/adminDashboard/AdminHome"
import AdminProfile from "./Components/adminDashboard/AdminProfile"
import AdminCustomers from "./Components/adminDashboard/AdminCustomers"
import AdminRequest from "./Components/adminDashboard/AdminRequest"

import UserHome from "./Components/userDashboard/UserHome"
import UserProfile from "./Components/userDashboard/UserProfile"
import UserBhishi from "./Components/userDashboard/UserBhishi"
import UserLoan from "./Components/userDashboard/UserLoan"

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home/>}/>
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

      </Routes>
    </div>
  );
}

export default App;
