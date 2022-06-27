import React from "react"
import TodoItem, { IToDo } from "./ToDoItem";


export interface IProps{
  toDos:  IToDo[],
  deleteTodoProps: (id: string) => void,
  setUpdate:  (updatedTitle: string, id:string) => void
}


class ToDoList extends React.Component<IProps, {}>{




  render() {
    return (
      <ul>
        {this.props.toDos.map(todo => (
          <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodoProps={this.props.deleteTodoProps}
          setUpdate={this.props.setUpdate}           
          />
        ))}
      </ul>
    )
  }
}

export default ToDoList