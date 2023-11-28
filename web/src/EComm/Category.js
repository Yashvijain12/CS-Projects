import React from 'react';
import "./Navbar.css";
import Hp from "../images/Hp.jpg";
import phone from "../images/phone.jpg";
import EC8 from "../images/EC8.jpg";
import EC9 from "../images/EC9.jpeg";
import EC7 from "../images/EC7.jpg";
function category(){
return(
<div className="category">
            <div className="smallContainer">
                 <div className="rows">
                    <div className="col-2"><img src={Hp} alt=""></img></div>
                    <div className="col-2"><img src={phone}alt=""></img></div>
                    <div className="col-2"><img src={EC8}alt=""></img></div>
                    <div className="col-2"><img src={EC9}alt=""></img></div>
                    <div className="col-2"><img src={EC7}alt=""></img></div>
                </div>
            </div>
</div>
);
}
export default category;