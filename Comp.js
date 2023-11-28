// import Navbar  from "./Navbar";
import React from 'react';
import Container from './Container ';
import Category from "./Category";
import Smallcontainer from "./Smallcontainer";
import Banner from "./Banner";
import NewProduct from './NewProduct';
import Footer from "./Footer";
import logo from '../images/logo.jpeg';
import {Link} from 'react-router-dom';
import './Navbar.css';
function Comp(){
    return(
        <div>
            <div className="header">
<div className="container">
    <div className="navbar">
        <div className="logo">
            <img src={logo} width="120px"height="50px"alt=""></img>
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

        </div>
    );
}
export default Comp();