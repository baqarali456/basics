
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Navabar from './components/Navabar';

function App() {
  const [mode,setMode] = useState("light");
  const [bntText,setbtnText] = useState("Enable Dark Mode");
  const [mystyle,setMystyle] = useState({
    color:"black"
  })

  const ontogglemode = () =>{
    if(mode === "light"){
      setMode("dark");
      setbtnText("Enable Light Mode");
      setMystyle({
        color:"white"
      })
    }
    else{
      setMode("light");
      setbtnText("Enable Dark Mode");
      setMystyle({
        color:"black"
      })
    }
  }
  return (
    <div className="App">
      <Navabar mode={mode} mystyle={mystyle} ontogglemode={ontogglemode} bntText={bntText}/>
      <div className="container">

      <Form heading="Enter the Text to Analyze"/>
      </div>
    </div>
  );
}

export default App;
