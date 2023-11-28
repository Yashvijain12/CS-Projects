import React  from 'react';
import './Navbar';
import img1 from '../images/img1.png';
function Container(){
return(
<div className="header">
<div className="container">
<div class="rows">
                    <div class="col">
                        <h1>We Love</h1><h1> ELECTRONICS!</h1>
                        <p>You need to adapt to changing times or get left behind.</p>
                        <p>It's difficult to imagine a world without Electronics...</p>
                        <br/>
                         <button  class="btn"> Explore Now <i class="fa-solid fa-arrow-right"></i> </button>
                     </div>
                    <div class="col">
                        <img src={img1} width="400px"height="400px"alt=""></img>
                    </div>
                </div>
            </div>
         </div>
);
}
export default Container;