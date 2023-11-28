import React from 'react';
import EC10 from '../images/EC10.jpg';
import Footer from './Footer';
import Navbar  from './Navbar';

function Prodetails3(){
return(
    <div>
    <Navbar></Navbar>
<div id="prodetails"className="rows">
<div className="col-7">
    <img src={EC10} width="100%"alt=""></img>
</div>
<div class="details">
    <h5>Home/HeadPhones</h5>
    <h2>HeadPhones</h2>
    <p className="price">$25000</p>
    <div className='hello'>
    <select>
        <option>Quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
   </select>
   <button className="btn2">Add to Cart</button>
   <h4>Details</h4>
   <p >dshhhjashdjhaskjdahsdjlasmdasgjshdsjdhsajh</p>
    </div>
</div>
</div>
<Footer></Footer>
</div>
);
}
export default Prodetails3;