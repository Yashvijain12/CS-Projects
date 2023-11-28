import React from 'react';
// import Navbar from './Navbar.js'
import {Link} from 'react-router-dom';
import Footer from './Footer.js';
import './Navbar.css';
import EC1 from '../images/EC1.jpg';
import EC11 from '../images/EC11.jpg';
import EC15 from '../images/EC15.jpg';
import Yakshilogo from '../images/Yakshilogo.jpg';
function Shop(){
    return(
        <div>
            <div className="header">
<div className="container">
    <div className="navbar">
        <div className='logo'>
            <img src={Yakshilogo}width="120px"height="50px"alt=""></img>
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
            <div class="shop2">
                        <h1 class="SN">Cart</h1>
                 </div>
                
                <div class="bag">
                <table class="cart">
                    <tr>
                    <th>Remove</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td><i className="fa-solid fa-circle-xmark"></i></td>
                        <td><img src={EC1}width="100px"height="100px"alt=""></img></td>
                        <td>Digital Camera</td>
                        <td>500</td>
                        <td><input type="number"value="1"></input></td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td><i class="fa-solid fa-circle-xmark"></i></td>
                        <td><img src={EC11}width="100px"height="100px"alt=""></img></td>
                        <td>Laptop</td>
                        <td>45000</td>
                        <td><input type="number"value="1"></input></td>
                        <td>45000</td>
                    </tr>
                    <tr>
                        <td><i class="fa-solid fa-circle-xmark"></i></td>
                        <td><img src={EC15}width="100px"height="100px"alt=""></img></td>
                        <td>Smart Phone</td>
                        <td>20000</td>
                        <td><input type="number"value="1"></input></td>
                        <td>20000</td> 
                     </tr>
                    <tr>
                        <td><i class="fa-solid fa-circle-xmark"></i></td>
                        <td><img src={EC1}width="100px"height="100px"alt=""></img></td>
                        <td>Smart Watch</td>
                        <td>2000</td>
                        <td><input type="number"value="1"></input></td>
                        <td>2000</td>
                    </tr>
                </table>
                </div>
                <div class="cart-add">
                <div class="coupan">
                     <h3>Apply For a coupan</h3>
                     <div>
                        <input type="text"placeholder="Enter Your Coupan"></input>
                        <button class="apply">Apply</button>
                     </div>
                </div>
                <div class="cart-tools">
                    <h3>Cart Tools</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$45000</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$45000</strong></td>
                        </tr>
                    </table>
                    <button class="check">Precede To Checkout</button>
                </div>
                </div>
                <Footer></Footer>
        </div>
    );
}
export default Shop;
