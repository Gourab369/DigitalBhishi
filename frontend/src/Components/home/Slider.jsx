import React from 'react'

function Slider() {
return (
    <div className='d-flex justify-content-center' >
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="slide1.avif" className="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
            <div className="carousel-item">
            <img src="slide2.jpg" className="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
            <div className="carousel-item">
            <img src="slider3.jpg" className="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
)
}

export default Slider