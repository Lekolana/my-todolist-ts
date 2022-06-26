import React, {FC, ChangeEvent, useState } from "react";
import { IInput } from "../interfaces";


const  InputArea: React.FC = () => {

  const [inputText, setInputText] = useState <IInput> ();

  const selectChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={selectChange} type="text" value={inputText} />
      <button onClick={() => {onAdd(inputText); setInputText("");}}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
