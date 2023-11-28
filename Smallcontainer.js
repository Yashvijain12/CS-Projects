import React from 'react';
import EC10 from "../images/EC10.jpg";
import EC12 from "../images/EC12.jpg";
import EC11 from "../images/EC11.jpg";
import EC1 from "../images/EC1.jpg";
import EC8 from "../images/EC8.jpg";
import EC15 from "../images/EC15.jpg";
import EC18 from "../images/EC18.jpg";
import EC6 from "../images/EC6.jpg";
import "./Navbar.css";
// import Item from './Item.js';
function Smallcontainer(){
    // const items=[{Name:"Smart Watch",image:EC11,price:"$25000"},
    //             {Name:"Projecter",image:EC12,price:"$30000"},
    //             {Name:"Headphones",image:EC10,price:"$45000"},
    //             {Name:"Camera",image:EC1,price:"$50000"},  
    //             {Name:"Apple I pad",image:EC8,price:"$100000"},   
    //             {Name:"Acer Laptop",image:EC15,price:"$45000"},
    //             {Name:"Smart Phone",image:EC18,price:"$30000"},
    //             {Name:"Laptop",image:EC6,price:"$39000"}];
// return(
/* <div className="smallContainer">
<h2 className="title">Featured Product</h2>
<div className="rows">
    <Item Name={items[0].Name} image={items[0].image} price={items[0].price}></Item>
    <Item Name={items[1].Name} image={items[1].image} price={items[1].price}></Item>
    <Item Name={items[2].Name} image={items[2].image} price={items[2].price}></Item>
    <Item Name={items[3].Name} image={items[3].image} price={items[3].price}></Item>
    <Item Name={items[4].Name} image={items[4].image} price={items[4].price}></Item>
    <Item Name={items[5].Name} image={items[5].image} price={items[5].price}></Item>
    <Item Name={items[6].Name} image={items[6].image} price={items[6].price}></Item>
    <Item Name={items[7].Name} image={items[7].image} price={items[7].price}></Item>
    

</div>
</div>   */
return(
<div>
    <div className="smallContainer">
             <h2 className="title">Featured Product</h2>
            <div className="rows">
                <div className="col-9">
                    <img src={EC11}alt=""></img>
                    <h4>Smart watch</h4>
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$5000</p>
                </div>
                <div className="col-9">
                    <img src={EC12}alt=""></img>
                    <h4>Projector</h4>
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$25000</p>
                </div>
                <div className="col-9">
                    <img src={EC10}alt=""></img>
                    <h4>Headphones</h4>
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-regular fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$45000</p>
                </div>
                <div className="col-9">
                    <img src={EC1}alt=""></img>
                    <h4>Camera</h4>
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$50000</p>
                </div>
                <div className="col-9">
                    <img src={EC8}alt=""></img>
                    <h4>Apple I Pad</h4>
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        
                    </div>
                    <p>$100000</p>
                </div>
                <div className="col-9">
                    <img src={EC15}alt=""></img>
                    <h4>Acer Laptop</h4>
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                         </div>
                    <p>$45000</p>
                </div>
                <div className="col-9">
                    <img src={EC18}alt=""></img>
                    <h4>Smart Phone</h4>
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$30000</p>
                </div>
                <div className="col-9">
                    <img src={EC6}alt=""></img>
                    <h4>Laptop</h4>
                    <div className="rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$39000</p>
                </div>

            </div>
        </div>  

</div>      
);
}
export default Smallcontainer;