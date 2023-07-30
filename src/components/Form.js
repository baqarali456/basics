import React from 'react';
import { useState } from 'react';

export default function Form({heading,showAlert,alert,mystyle}) {
    const [text,setText] = useState("");
    function handleUpperCase(){
        let newText = text.toLocaleUpperCase();
        setText(newText)
        showAlert("Text is converted into Uppercase","success")
    }
    function handleLowerCase(){
        let newText = text.toLocaleLowerCase();
        setText(newText);
        showAlert("Text is converted into Lowercase","success")
    }
  return (

    <div className="mb-3" style={mystyle}>
    <h2 className='my-3'>{heading}</h2>
  <textarea className="form-control" onChange={(e)=>setText(e.target.value)} value={text} id="exampleFormControlTextarea1" rows="7"></textarea>
  <div>
  <button onClick={handleUpperCase} className="btn btn-primary mx-2 my-3">Convert To UpperCase</button>
  <button onClick={handleLowerCase} className="btn btn-primary mx-2 my-3">Convert To Lowercase</button>

  </div>
</div>
  )
}
