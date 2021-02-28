import React,{useState , useEffect} from "react";
import dataScript from "./component/ScriptureDB";
import Scripture from "./component/Scripture";


const App = () =>  {

const [date , setDate] = useState(new Date().toDateString());
const [render , setRender] = useState({})

const getListOfScripture = () => {
  let mapped = dataScript.map((item, id) => {
    if (date === item.date) {
      setRender(item);
    }
  })

  return mapped;
}

useEffect(() => {
  getListOfScripture();
},[])




  return(
    <div>
      <Scripture render={render} /> 
    </div>
    );
}

export default App;
