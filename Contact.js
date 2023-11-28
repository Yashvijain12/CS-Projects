import React from 'react';
import './Navbar.css';
// import Navbar from './Navbar.js';
import Yakshilogo from '../images/Yakshilogo.jpg';
import {Link} from 'react-router-dom';
import Footer from './Footer.js';
import EC1 from '../images/EC1.jpg';
import EC2 from '../images/EC2.jpg';
import EC3 from '../images/EC3.jpg';
function Contact(){
    return(
        <>
            <div className="header">
<div className="container">
    <div className="navbar">
        <div className="logo">
            <img src={Yakshilogo} width="120px"height="50px"alt=""></img>
        </div>
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
            <div className="about">
            <h1>Let's Talk</h1>
            </div>

        <div id="Contact"className="rows">
            <div className="connection">
                <span>Get in Contact</span>
                    <h2>Visit one of our Agency locations or contact us today </h2>
                <div>
                    <li><i className="fa-solid fa-map"></i>
                        <p>Dhampur ,Bijnor</p>
                        </li>
                    <li><i className="fa-solid fa-message"></i>
                    <p>contact@example.com</p>
                    </li>
                    <li><i className="fa-solid fa-phone"></i>
                        <p>contact@example.com</p>
                        </li>
                    <li><i className="fa-solid fa-clock"></i>
                            <p>Anytime</p>
                            </li>
                </div>

            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9542.887238438307!2d78.50156385070457!3d29.308962453414534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bc824c883349d%3A0xf8228fe75dfb551!2sDhampur%2C%20Uttar%20Pradesh%20246761!5e0!3m2!1sen!2sin!4v1694797636667!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"title="Map"></iframe>
            </div>
        </div>

        <div id="form">
            <form>
                <span >Leave a Message</span>
                <h2 >We love to hear You</h2>
                <br/>
                <input type="text"placeholder="Your Name"></input>
                <input type="text"placeholder="Email"></input>
                <input type="text"placeholder="subject"></input>
                <textarea name=""id=""cols="10"rows="10"placeholder="Your message"></textarea>
                <button>Submit</button>
                
            </form>
    
            <div className="person">
                <div className="people">
                <img src={EC1} width="100px"height="100px"alt=""></img>
                <p>xjhsjdhjsjshdmsnhsjd</p>
                </div>
                <div>
                <img src={EC2}width="100px"height="100px"alt=""></img>
                <p>djsdhkjjshjdsndsamds</p>
                </div>
                <div>
                <img src={EC3}width="100px"height="100px"alt=""></img>
                <p>jshdjhasjdhsadjasdasj</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}
export default Contact;