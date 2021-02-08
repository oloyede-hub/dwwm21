import React from "react";
import "../styles/DisplayScripture.css";



function DisplayScripture(props) {
	const { item } = props.location.state;

	const [data , setData] = React.useState(item);

  return (
    <div className="scripture">
    	<p>{data.chapter}</p>
    	<p>{data.reading}</p>
    </div>
  );
}

export default DisplayScripture;

