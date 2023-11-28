import React from 'react';
import './Navbar.css';
function Item({Name,image,price}){
    return(
    <div className='col-9'>
       <img src={image}alt=""></img>
       <h4>{Name}</h4>
       
       <div className="rating">
           <i className="fa-sharp fa-solid fa-star"></i>
           <i className="fa-sharp fa-solid fa-star"></i>
           <i className="fa-sharp fa-solid fa-star"></i>
           <i className="fa-sharp fa-solid fa-star"></i>
           <i class="fa-regular fa-star"></i>
       </div>
       <p>{price}</p>
   </div>
    );
}
export default Item;