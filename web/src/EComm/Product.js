import React from 'react';
import './Navbar.css';
// import Navbar from './Navbar';
import Yakshilogo from '../images/Yakshilogo.jpg';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
// import Rate from './Rate.js';
import EC11 from '../images/EC11.jpg';
import EC12 from '../images/EC12.jpg';
import EC10 from '../images/EC10.jpg';
import EC1 from '../images/EC1.jpg';
import EC8 from '../images/EC8.jpg';
import EC15 from '../images/EC15.jpg';
import EC18 from '../images/EC18.jpg';
import EC6 from '../images/EC6.jpg';
// import {useNavigate} from 'react-router-dom';
// import Prodetails1 from './Prodetails1';
// import Prodetails2 from './Prodetails2';
// import Prodetails3 from './Prodetails3';
// import Prodetails4 from './Prodetails4';
// import Prodetails5 from './Prodetails5';
// import Prodetails6 from './Prodetails6';
// import Prodetails7 from './Prodetails7';
// import Prodetails8 from './Prodetails8';
function Product(){

    
    // const pro=[{Name:"Smart Watch",image:EC11,price:"$5000",attach:Prodetails1},
    // {Name:"Projecter",image:EC12,price:"$25000",attach:Prodetails2},
    // {Name:"Headphones",image:EC10,price:"$25000",attach:Prodetails3},
    // {Name:"Camera ",image:EC1,price:"$50000",attach:Prodetails4},
    // {Name:"Apple I pad",image:EC8,price:"$100000",attach:Prodetails5},
    // {Name:"Acer Laptop",image:EC15,price:"$45000",attach:Prodetails6},
    // {Name:"Smart Phone",image:EC18,price:"$30000",attach:Prodetails7},
    // {Name:"Laptop",image:EC6,price:"$39000",attach:Prodetails8},
// ]


    return(
        <div>
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
        <div className="shop">
                        <h1 className="SN">Shop Now</h1>
                 </div>
             <div className='smallContainer'>
                <div className='title1'>
                    <div className='rows'>
                        {/* <Rate Name={pro[0].Name} image={pro[0].image} price={pro[0].price} attach={pro[0].attach}></Rate>
                        <Rate Name={pro[1].Name} image={pro[1].image} price={pro[1].price} attach={pro[1].attach}></Rate>
                        <Rate Name={pro[2].Name} image={pro[2].image} price={pro[2].price} attach={pro[2].attach}></Rate>
                        <Rate Name={pro[3].Name} image={pro[3].image} price={pro[3].price} attach={pro[3].attach}></Rate>
                        <Rate Name={pro[4].Name} image={pro[4].image} price={pro[4].price} attach={pro[4].attach}></Rate>
                        <Rate Name={pro[5].Name} image={pro[5].image} price={pro[5].price} attach={pro[5].attach}></Rate>
                        <Rate Name={pro[6].Name} image={pro[6].image} price={pro[6].price} attach={pro[6].attach}></Rate>
                        <Rate Name={pro[7].Name} image={pro[7].image} price={pro[7].price} attach={pro[7].attach}></Rate> */}
<div class="col-3">
                           <img src={EC11}alt=""></img>
                           <h4>Smart watch</h4>
                           <div className="rating">
                               <i className="fa-sharp fa-solid fa-star"></i>
                               <i className="fa-sharp fa-solid fa-star"></i>
                               <i className="fa-sharp fa-solid fa-star"></i>
                               <i className="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-regular fa-star"></i>                           
                               </div>
                           <p>$5000</p>
                       </div>
                       <div class="col-3" onclick="window.location.href='Prodetails2'">
                           <img src={EC12}alt=""></img>
                           <h4>Projector</h4>
                           <div class="rating">
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                           </div>
                           <p>$25000</p>
                       </div>
                       <div class="col-3" onclick="window.location.href='Prodetails3'">
                           <img src={EC10}alt=""></img>
                           <h4>Headphones</h4>
                           <div class="rating">
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-regular fa-star-half-stroke"></i>
                               <i class="fa-regular fa-star"></i>                  
                            </div>
                           <p>$2000</p>
                       </div>
                       <div class="col-3"onclick="window.location.href='Prodetails4'">
                           <img src={EC1}alt=""></img>
                           <h4>Camera</h4>
                           <div class="rating">
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                           </div>
                           <p>$50000</p>
                       </div>
                       <div class="col-3"onclick="window.location.href='Prodetails5'">
                           <img src={EC8}alt=""></img>
                           <h4>Apple I Pad</h4>
                           <div class="rating">
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                           </div>
                           <p>$100000</p>
                       </div>
                       <div class="col-3"onclick="window.location.href='Prodetails6'">
                           <img src={EC15}alt=""></img>
                           <h4>Acer Laptop</h4>
                           <div class="rating">
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                           </div>
                           <p>$45000</p>
                       </div>
                       <div class="col-3"onclick="window.location.href='Prodetails7'">
                           <img src={EC18}alt=""></img>
                           <h4>Smart Phone</h4>
                           <div class="rating">
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-regular fa-star"></i>                       
                            </div>
                           <p>$30000</p>
                       </div>
                       <div class="col-3"onclick="window.location.href='Prodetails8'">
                           <img src={EC6}alt=""></img>
                           <h4>Laptop</h4>
                           <div class="rating">
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-solid fa-star"></i>
                               <i class="fa-sharp fa-regular fa-star-half-stroke"></i>
                               <i class="fa-regular fa-star"></i>
                           </div>
                           <p>$39000</p>
                       </div>


                    </div>
                </div>
                </div>    
        <Footer></Footer>
        </div>
    );
}
export default Product;