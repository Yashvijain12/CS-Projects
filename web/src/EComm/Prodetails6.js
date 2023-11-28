import React from 'react';
import EC15 from '../images/EC15.jpg';
import Footer from './Footer';
import Navbar  from './Navbar';

function Prodetails6(){
return(
    <div>
    <Navbar></Navbar>
<div id="prodetails"className="rows">
<div className="col-7">
    <img src={EC15} width="100%"alt=""></img>
</div>
<div class="details">
    <h5>Home/Acer Laoptop</h5>
    <h2>Acer Laptop</h2>
    <p className="price">$45000</p>
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
export default Prodetails6;