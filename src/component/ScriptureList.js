import React,{useState , useEffect} from "react";
import Scripture from "./Scripture";
import data from "./ScriptureDB";
import {Link} from "react-router-dom";
import "../styles/ScriptureList.css";




const ScriptureList = () =>  {

// <Link to={{
//             pathname: `/scriptures/${id}`,
//             state: {
//                 item: item
//             }
//         }}  > 


  return(
    <div className="lists">
        {data.map((item , id) =><Scripture id={id} item={item} key={id} />)}
    </div>
    );
}

export default ScriptureList;




  // unique identifier: -MSjWIVLsFdU0YMwx3xD




