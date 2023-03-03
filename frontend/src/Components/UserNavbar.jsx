import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserNavbar=({children})=> {
const navigator=useNavigate();
const handleHome=()=>{
    navigator("/userHome")
}
const handleProfile=()=>{
    navigator("/userProfile")
}

const handleBhishi=()=>{
  navigator("/userBhishi")
}

const handleLoan=()=>{
  navigator("/userLoan")
}

const handleLogout=()=>{
  navigator("/userLogout")
}

    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid justify-content-start">
      <button type="button" className="btn btn-primary btn-lg me-5" onClick={handleLogout}>Logout</button>
      <button className="btn btn-outline-success me-5" type="button" onClick={handleHome}>Home</button>
      <button className="btn btn-outline-success me-5" type="button" onClick={handleProfile}>Profile</button>
      <button className="btn btn-outline-success me-5" type="button" onClick={handleBhishi}>MY Bhishi</button>
      <button className="btn btn-outline-warning me-" type="button" onClick={handleLoan}> Loans</button>     
      </div>
        </nav>
    <>
    {children}</>
  </div>      
    )
}

export default UserNavbar;
