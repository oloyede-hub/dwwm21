import React from "react";

function Scripture({render}) {
  
  return (
    <div className="scripture">
    	<p>{render.key}</p>
    	<p>{render.chapter}</p>
    	<p>{render.reading}</p>
    </div>
  );
}

export default Scripture;

