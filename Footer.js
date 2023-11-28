import React from 'react';
import './Navbar.css';
import Gplaystore from '../images/Gplaystore.jpg';
import Appstore from '../images/Appstore.jpg';
import Gpay from '../images/Gpay.jpeg';
import Paytm from '../images/Paytm.png';
import phonepe from '../images/phonepe.png';
function Footer(){
return(
<div className="footer">
<div className="smallContainer">
<div className="rows">
    <div className="col-4">
        <h4>Contact</h4>
        <table>
            <tr>
                <td>Address:</td>
                <td>Dhampur,Bijnor</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>1233456779</td>
            </tr>
            <tr>
                <td>Location:</td>
                <td>Nagina Chawk Dhampur</td>
            </tr>
        </table>
        <h4 >Follow Us</h4>
        <div className="follow">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-youtube"></i>
        </div>
    </div>
    <div className="col-4">
        <h4>About</h4>
        <ul>
            <li><a href={1}>About Us</a></li>
            <li><a href={2}>Delivery Information</a></li>
            <li><a href={3}>Privacy policy</a></li>
            <li><a href={4}>Services and Conditions </a></li>
        </ul>
    </div>
    <div className="col-4">
        <h4>My Account</h4>
        <ul>
            <li><a href={1}>Sign in</a></li>
            <li><a href={2}>View Cart</a></li>
            <li><a href={3}>Wishlist</a></li>
            <li><a href={4}>Help </a></li>
        </ul>
    </div>
    <div className="col-4">
        <h4>Install App</h4>
        <p>From the App store or Play store</p>
        <div>
            <img src={Gplaystore}alt=""></img>
            <img src={Appstore}alt=""></img>
        </div>
        <p>Secured Payment</p>
        <div>
            <img src={Gpay}alt=""></img>
            <img src={Paytm}alt=""></img>
            <img src={phonepe}alt=""></img>
    </div>
</div>
</div>
</div>
</div>
);
}
export default Footer;