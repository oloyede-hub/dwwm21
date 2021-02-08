import React from "react";
import "../styles/headerfooter.css";
import {Link} from "react-router-dom";






function Navbar({children}) {


  return (
    <div className="scripture">
    	<section>
    		<div className="container">
    			<div className="navbar">
    				<h1>FGF Devotional</h1>
    				<ul className ="links">
    					<li><Link className="link" to="/">Home</Link></li>
    					<li><Link className="link" to="/about">About</Link></li>
    					<li><Link className="link"  to="/scriptures">scriptureList</Link></li>
    					<li><Link className="link" to="#">Todays Word</Link></li>
    				</ul>
    			</div>
                <div className="content">
    			{children}
                </div>
    			<div className="footer">
    				<p> I am the footer</p>
    			</div>
    		</div>
    	</section>
    </div>
  );
}
 
export default Navbar;

