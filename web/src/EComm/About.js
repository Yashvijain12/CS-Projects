import './Navbar.css';
// import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Abo from '../images/Abo.jpg';
import Yakshilogo from '../images/Yakshilogo.jpg';
import {Link} from 'react-router-dom';
function About(){
    return(
        <div>
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
            <div className="about">
            <h1>Know About Us</h1>
        </div>
        <div className="image">
        <div className="know">
            <img src={Abo}width="30%"height="30%" alt=""></img>
        </div>
            <div className="know">
            <h2 >Who Are We ?</h2>
            <p>Yakshi is the best e-commerce retailer now-a-days, and has changed the face of retail so much that a burning question for most retailers is how to beat it.
                It provides customers with the best in both convenience and accessibility. 
                We focus on the online business, with great results, offering sales, as well as delivery and subscription services.
                In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments.</p>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}
export default About;
