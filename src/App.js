import React,{useState , useEffect} from "react";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import dataScript from "./component/ScriptureDB";
import Reading from "./component/Reading";
import About from "./component/About";
import ScriptureList from "./component/ScriptureList";
import DailyMotivation from "./component/DailyMotivation";
import DisplayScripture from "./component/DisplayScripture";
import Navbar from "./component/Navbar";







const App = () =>  {

const [date , setDate] = useState(new Date().toDateString());
const [renders , setRenders] = useState({})

const getListOfScripture = () => {
  let mapped = dataScript.map((item, id) => {
    if (date === item.date) {
      setRenders(item);
    }
  })

  return mapped;
}

useEffect(() => {
  getListOfScripture();
},[])



  return(
    <Router>
      <Navbar>
        <Switch>
          <Route exact path="/"  render={() =><Reading renders={renders}  />} />
          <Route  path="/about" component={About}   /> 
          <Route path="/scriptures/:id" component={DisplayScripture}  /> 
          <Route path="/interests" component={DailyMotivation}  /> 
          <Route path="/scriptures" component={ScriptureList}  />
        </Switch>
      </Navbar> 
    </Router>
    );
}

export default App;
