import React from 'react';
import './Navbar.css';
import EC11 from '../images/EC11.jpg';
import EC7 from '../images/EC7.jpg';
import EC2 from '../images/EC2.jpg';
import EC5 from '../images/EC5.jpg';

function NewProduct(){
return(
<div className="smallContainer">
<h2 className="title">New Products</h2>
<div className="rows">
<div class="col-9">
    <img src={EC11}alt=""></img>
    <h4>Smart watch</h4>
    <div className="rating">
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-light fa-star"></i>
    </div>
    <p>$5000</p>
</div>
<div className="col-9">
    <img src={EC7}alt=""></img>
    <h4>Smart watch</h4>
    <div className="rating">
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-light fa-star"></i>
    </div>
    <p>$50000</p>
</div>
<div className="col-9">
    <img src={EC2}alt=""></img>
    <h4>Smart watch</h4>
    <div className="rating">
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-light fa-star"></i>
    </div>
    <p>$25000</p>
</div>
<div className="col-9">
    <img src={EC5}alt=""></img>
    <h4>Smart watch</h4>
    <div className="rating">
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-solid fa-star"></i>
        <i className="fa-sharp fa-light fa-star"></i>
    </div>
    <p>$15000</p>
</div>

</div>
</div>
);
}
export default NewProduct;