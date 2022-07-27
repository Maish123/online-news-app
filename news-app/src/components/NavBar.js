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
                       <Link to="/about" className="nav-link">ABOUT</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/info" className="nav-link">INFO</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/search" className="nav-link">SEARCH</Link>
                   </li>
               </ul>
               </div>
           </nav>
       </div>
   )
}

export default NavBar;