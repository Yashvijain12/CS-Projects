import './App.css';
import Navbar from './EComm/Navbar.js';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import Product from './EComm/Product.js';
import About from './EComm/About.js';
import Contact from './EComm/Contact.js';
import Account from './EComm/Account.js';
import Shop from './EComm/Shop.js';


function App() {
  return(
      <>
    
    <BrowserRouter>
    
    <div>
    <Routes>
    <Route path="/" element={<Navbar/>}/>
    <Route path="/Product" element={<Product/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Account" element={<Account/>} />
    <Route path="/Shop" element={<Shop/>} />
    </Routes>
    
    </div>
  
    </BrowserRouter>
    
   
    </>
  );
}

export default App;
