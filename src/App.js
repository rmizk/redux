import "./App.css";
import Addtask from "./components/Addtask";
import Listtask from "./components/Listtask";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import { useSelector } from "react-redux";
import { useState } from "react";



function App() {

  const [filt, setfilt] = useState(false)

    const handleChange =  ()=> setfilt(!filt)

    const todos = useSelector(state => state)


  return <div className="App">
    <h1>TO DO APP</h1>
    <br />
    <Addtask change={handleChange} />
    
    <div>
            {
            !filt?
            todos.map((el,i)=>   <Card key={i} todo={el}  /> )
            :
            todos.filter(todos=>!todos.isdone).map((el,i)=>   <Card key={i} todo={el}  /> )
            
            
            }
            
        </div>


    <br />
    
    <Listtask  />

    
  </div>;
}

export default App;
