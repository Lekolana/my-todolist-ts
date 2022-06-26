import React from "react";

interface IProps{
  key: number,
  id:number,
  text:string
  onChecked(id:number): void;
}


export const ToDoItem:React.FC<IProps> = ({onChecked,id,text})=> {
  return (
    <div
      onClick={() => {
        onChecked(id);
      }}
    >
      <li>{text}</li>
    </div>
  );
}

export default ToDoItem;
