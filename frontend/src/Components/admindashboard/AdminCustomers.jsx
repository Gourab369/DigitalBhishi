import React from 'react'
import Navbar from '../Navbar';
import backgroundImage from "./backdashboard.jpg"
const AdminCustomers = () => {
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
          <Navbar/>
          <h1 style={{color:"red"}}>Welcome</h1> 
          <h1 style={{color:"red"}}>Admin Customers</h1> 
      </div>

      <div className='offset-2'>
                <table className="table-primary border-5">
                <tr className="table-primary">
                  <th className="table-primary">Full Name</th>
                  <th className="table-secondary">Mobile Number</th>
                  <th className="table-success">Alternate Number</th>
                  <th className="table-danger">Aadhar Number</th>
                  <th className="table-light">Address</th>
                  <th className="table-light">Option</th>
                  </tr>

                  <tr className="table-primary">
                  <td className="table-primary">Full Name</td>
                  <td className="table-secondary">Mobile Number</td>
                  <td className="table-success">Alternate Number</td>
                  <td className="table-danger">Aadhar Number</td>
                  <td className="table-light">Address</td>
                  <td className="table-dark"> <button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                  </tr>

                  <tr className="table-primary">
                  <td className="table-primary">Full Name</td>
                  <td className="table-secondary">Mobile Number</td>
                  <td className="table-success">Alternate Number</td>
                  <td className="table-danger">Aadhar Number</td>
                  <td className="table-light">Address</td>
                  <td className="table-dark"> <button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                  </tr>
                 
                  <tr className="table-primary">
                  <td className="table-primary">Full Name</td>
                  <td className="table-secondary">Mobile Number</td>
                  <td className="table-success">Alternate Number</td>
                  <td className="table-danger">Aadhar Number</td>
                  <td className="table-light">Address</td>
                  <td className="table-dark"> <button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                  </tr>

                  
                  <tr className="table-primary">
                  <td className="table-primary">Full Name</td>
                  <td className="table-secondary">Mobile Number</td>
                  <td className="table-success">Alternate Number</td>
                  <td className="table-danger">Aadhar Number</td>
                  <td className="table-light">Address</td>
                  <td className="table-dark"> <button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                  </tr>

                  
                  <tr className="table-primary">
                  <td className="table-primary">Full Name</td>
                  <td className="table-secondary">Mobile Number</td>
                  <td className="table-success">Alternate Number</td>
                  <td className="table-danger">Aadhar Number</td>
                  <td className="table-light">Address</td>
                  <td className="table-dark"> <button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                  </tr>
                  
                  <tr className="table-primary">
                  <td className="table-primary">Full Name</td>
                  <td className="table-secondary">Mobile Number</td>
                  <td className="table-success">Alternate Number</td>
                  <td className="table-danger">Aadhar Number</td>
                  <td className="table-light">Address</td>
                  <td className="table-dark"> <button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                  </tr>
                </table>
 
            </div>

      </div>
      }
    </div>
    </>
    )
}
export default AdminCustomers;