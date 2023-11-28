import React from 'react';
import "./Navbar.css";
import Yakshilogo from '../images/Yakshilogo.jpg';
import {Link} from 'react-router-dom';
import Container from './Container ';
import Smallcontainer from './Smallcontainer';
import NewProduct from './NewProduct';
import Category from './Category';
import Banner from './Banner';
import Footer from './Footer'

 
function Navbar(){
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
    
    <Container></Container>
    <Category></Category>
    <Smallcontainer></Smallcontainer>
    <Banner></Banner>
    <NewProduct></NewProduct>
    <Footer></Footer>
    </>
    );
    }
    export default Navbar;