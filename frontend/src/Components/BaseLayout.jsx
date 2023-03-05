import { useNavigate } from "react-router-dom";

const BaseLayout=()=>{
const navigator=useNavigate();

const navHome=()=>{
    navigator("/")
}

function navLogin(){
    navigator("/login")
}

function navRegistration(){
    navigator("/registration")
}

function navAbout(){
    navigator("/about")
}

function navContactUs(){
    navigator("/contactus")
}

    return (<>
        <div>
                <div className="title row">
                    <div className="titlebar col mb-2">
                    <img className="titlelogo" src="coinlogo.jpg" />Digital Bhishi</div>
                </div>
                <hr/>
                
                <div className="row grid-container">
                        <a  className="btn col-1 text-center" onClick={navHome}>HOME</a>
                        <a  className="btn col-1 text-center" onClick={navLogin} >SIGN IN</a>
                        <a  className="btn col-1 text-center" onClick={navRegistration} >SIGN UP</a>
                        <a  className="btn col-1 text-center" onClick={navAbout} >ABOUT</a>
                        <a  className="btn col-2 text-start" onClick={navContactUs} >CONTACT US</a>
                </div>
                </div>
                
        </>
    );
}

export default BaseLayout;