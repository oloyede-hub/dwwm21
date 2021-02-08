import React from "react";
import "../styles/Reading.css"


function Reading({renders}) {
  
  return (
    <div className="reading">
    	<div className="content-card">
    		<header>
    			<h2>Reading: {renders.chapter}</h2>
    			<h2>Date: {renders.date}</h2>
    		</header>
    		<div>
    			<h4>{renders.reading}</h4>
    		</div>
    	</div>
    </div>
  );
}

export default Reading;
