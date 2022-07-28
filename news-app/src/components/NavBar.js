import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
   return( 
       <div>
           <nav className="navbar navbar-expand-lg bg-success">
               <div className="container-fluid">
               <ul className="navbar-nav">
                   <li className="nav-item">
                       <Link to="/" className="nav-link">HOME</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/contactUs" className="nav-link">CONTACT US</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/addnews" className="nav-link">ADD NEWS</Link>
                   </li>
               </ul>
               </div>
           </nav>
       </div>
   )
}

export default NavBar;