import React from 'react'
import Navbar from '../Navbar'
import Slider from '../home/Slider';

const AdminHome=()=> {
    return (<>

                <div className="row">
                  <Navbar/>
                </div>

                <div className="row ">
                  <Slider/>
                </div>


        
        </>
    )
}

export default AdminHome
