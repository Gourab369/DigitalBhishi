import react from "react";

function Footer() {

    return (
            <div className="container-fluid">
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1c2331" }}
                >

                    <section
                        className="d-flex justify-content-between p-4"
                        style={{backgroundColor:"rgb(72, 129, 153)"}}
                    >

                        <div className="me-5">
                        <h6 className="text-uppercase fw-bold">Get Connected With Us On Social Media</h6>
                        </div>

                        <div>
                            <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-white me-4">
                            <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            
                            <a href="https://www.facebook.com/" className="text-white me-4">
                            <img className="mt-2 me-2" src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="text-white me-4">
                            <img className="mt-2 me-2" src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" style={{height: "30px" , width:"30px"}}></img>
                            </a>
                            
                        </div>

                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 className="fw-bold">Digital Bhishi</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                    <p>
                                    “Digital Bhishi” project is an attempt to provide a platform to the
                                    people of rural India. It aspires to be the first of its kind providing 
                                    service for their Bhishi Digitally.

                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">   Home</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="/admin-login" className="text-white">Admin</a>
                                    </p>
                                    <p>
                                        <a href="/ServiceProvider-login" className="text-white">ServiceProvider</a>
                                    </p>
                                    <p>
                                        <a href="/customer-login" className="text-white">Customer</a>
                                    </p>
                                    
                                </div>



                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="/" className="text-white">Contact us</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-white">About us</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-white">Help</a>
                                    </p>
                                </div>



                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />

                                    <p><i className="fas fa-envelope mr-3"></i>Digitalbhishi@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i></p>
                                    <p><i className="fas fa-phone mr-3"></i>Rohan Ashoke Shintre</p>
                                    <p><i className="fas fa-phone mr-3"></i>Gourab Kamakar</p>
                                    <p><i className="fas fa-phone mr-3"></i>Aditya Darade</p>
                                    <p><i className="fas fa-print mr-3"></i>Gourav Purohit</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        <hr className="mb-4"></hr>
                        Copyright ©2023 All rights reserved by :
                        <a className="text-white" href="https://DigitalBhishi.com/">Infoway Technology Pvt.Ltd.</a
                        >
                    </div>

                </footer>


            </div>

    );
}

export default Footer;