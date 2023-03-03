import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar=({children})=> {
const navigator=useNavigate();
const handleHome=()=>{
    navigator("/adminHome")
}
const handleProfile=()=>{
    navigator("/adminProfile")
}

const handleRequest=()=>{
  navigator("/adminRequest")
}

const handleCustomers=()=>{
  navigator("/adminCustomers")
}
const handleLogout=()=>{
  navigator("/adminLogout")
}

    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid justify-content-start">
      <button type="button" className="btn btn-primary btn-lg me-5" onClick={handleLogout}>Logout</button>
      <button className="btn btn-outline-success me-5" type="button" onClick={handleHome}>Home</button>
      <button className="btn btn-outline-success me-5" type="button" onClick={handleProfile}>Profile</button>
      <button className="btn btn-outline-success me-5" type="button" onClick={handleCustomers}>Customers</button>
      <button className="btn btn-outline-warning me-" type="button" onClick={handleRequest}> Request</button>     
      </div>
        </nav>
    <>
    {children}</>
  </div>
        
    )
}

export default Navbar
