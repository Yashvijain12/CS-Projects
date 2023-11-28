import React from 'react';
import './Navbar.css';
function Rate({Name,image,price,attach}){
    return(
    <div className='col-3' onclick={window.location.href={attach}}>
       <img src={image}alt=""></img>
       <h4>{Name}</h4>
       
       <div className="rating">
           <i className="fa-sharp fa-solid fa-star"></i>
           <i className="fa-sharp fa-solid fa-star"></i>
           <i className="fa-sharp fa-solid fa-star"></i>
           <i className="fa-sharp fa-solid fa-star"></i>
           <i className="fa-sharp fa-light fa-star"></i>
       </div>
       <p>{price}</p>
   </div>
    );
}
export default Rate;