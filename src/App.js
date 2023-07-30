
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Navabar from './components/Navabar';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState("light");
  const [bntText,setbtnText] = useState("Enable Dark Mode");
  const [mystyle,setMystyle] = useState({
    color:"black"
  });
  const[alert,setAlert]  = useState(null);

  const ontogglemode = () =>{
    if(mode === "light"){
      setMode("dark");
      setbtnText("Enable Light Mode");
      setMystyle({
        color:"white",
        
      });
      document.body.style.backgroundColor = "grey"
    }
    else{
      setMode("light");
      setbtnText("Enable Dark Mode");
      setMystyle({
        color:"black",
      });
      
      document.body.style.backgroundColor = "white"
    }
  }
  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  return (
    <div className="App">
      <Navabar mode={mode} mystyle={mystyle} ontogglemode={ontogglemode} bntText={bntText}/>
      <Alert alert={alert}/>
      <div className="container">

      <Form mystyle={mystyle} mode={mode} alert={alert} showAlert={showAlert} heading="Enter the Text to Analyze"/>
      </div>
    </div>
  );
}

export default App;
