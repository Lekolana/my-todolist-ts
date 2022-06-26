import React, { MouseEvent,useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import { IToDoItem } from "../interfaces";
import {I}




export const  App: React.FC = () => {
  const [items, setItems] = useState<IToDoItem[]>([]);

  const addItem = ():void => {
    const newItem = {toDoItem:inputText}
    setItems([...items,inputText])
  }

  function deleteItem(id:number) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
