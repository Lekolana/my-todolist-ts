import React from "react"
import TodoItem from "./ToDoItem";

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.toDos.map(todo => (
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