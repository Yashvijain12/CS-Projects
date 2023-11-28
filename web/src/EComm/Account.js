import React from 'react';
// import Navbar from './Navbar';
import Footer from './Footer';
import './Navbar.css';
// import logo from '../images/logo.jpeg';
import {Link} from 'react-router-dom';

function Account(){
    function login(){
        var loginform = document.getElementById("logform");
        var registerform = document.getElementById("registerform");
        var indicator = document.getElementById("indicator");
         loginform.style.transform ="translateX(0px)";
         registerform.style.transform="translateX(0px)";
         indicator.style.transform="translateX(100px)";
    }
    function register(){
        var loginform = document.getElementById("logform");
        var registerform = document.getElementById("registerform");
        var indicator = document.getElementById("indicator");
         loginform.style.transform ="translateX(0px)";
         registerform.style.transform="translateX(0px)";
         indicator.style.transform="translateX(100px)"
    }

    
    return(
        <div>
            <div className="header">
<div className="container">
    <div className="navbar">
       
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Product">Product</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Account">Account</Link></li>
                <li><Link to="/Shop"><i class="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
        </nav>
    </div>
    </div>
    </div>
            <div className="account-p">
                <div className="Contain">
                        <div className='form-container'>
                            <div className='form-btn'>
                                <span onClick={login}>Login</span>
                                <span onClick={register}>Register</span>
                            <hr id="indicator"></hr>                          
                            </div>
                
                    <form id="logform"method='post'>
                    Username:<input type="text"></input>
                    Password:<input type="password"></input>
                    <button className="btn">Login</button>
                    </form>

                    <form id="registerform">
            Name:<input type="text"></input><br/>
            Email:<input type="email"></input><br/>
            Password:<input type="password"></input><br/>
            Confirm Password:<input type="password"></input><br/>
            Contact:<input type="number"></input><br/>
            <button className="btn">Register</button>
                     </form>
                     </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Account;