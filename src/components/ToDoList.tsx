import React from "react"
import TodoItem, { IToDo } from "./ToDoItem";


export interface IProps{
  key:number,
  
}


class ToDoList extends React.Component<{
   todos:  IToDo[],
   handleEditing :() =>void,
   handleUpdatedDone:() =>void,
   deleteTodoProps: (id: string) => void,
   setUpdate:  (updatedTitle: string, id:string) => void
  }> {




  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps}
          setUpdate={this.props.setUpdate}           
          />
        ))}
      </ul>
    )
  }
}

export default ToDoList