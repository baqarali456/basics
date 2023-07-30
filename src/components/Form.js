import React from 'react';
import { useState } from 'react';

export default function Form({heading}) {
    const [text,setText] = useState("");
    function handleUpperCase(){
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }
    function handleLowerCase(){
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
  return (

    <div class="mb-3">
    <h2 className='my-3'>{heading}</h2>
  <textarea class="form-control" onChange={(e)=>setText(e.target.value)} value={text} id="exampleFormControlTextarea1" rows="7"></textarea>
  <div>
  <button onClick={handleUpperCase} className="btn btn-primary mx-2 my-3">Convert To UpperCase</button>
  <button onClick={handleLowerCase} className="btn btn-primary mx-2 my-3">Convert To Lowercase</button>

  </div>
</div>
  )
}
