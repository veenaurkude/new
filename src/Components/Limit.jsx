import React, { useState } from 'react';
import "./Limit.Module.css";

function Limit() {

  const [text, setText] = useState('');

  const [isDisabled, setIsDisabled] = useState(false)

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 100) {
      setText(inputText);
    }
    else{
      setIsDisabled(true)
     }
  };

  return (
    <div className="limit">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        cols={50}
        rows={7}
    disabled={isDisabled}
      />
      <h4 className='count'>{100 - text.length} characters left</h4>
    </div>
  );
}

export default Limit;