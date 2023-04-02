import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "./Login&Registration/Login"
import Registration from "./Login&Registration/Registration"
import Home from "./Home"
import ForgetPassword from './Login&Registration/ForgetPassword';
import ResetPassword from './ResetPassword';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="registration" element={<Registration/>}/>
    <Route path="forgetPassword" element={<ForgetPassword/>}/>
    <Route path="resetPassword" element={<ResetPassword/>}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
