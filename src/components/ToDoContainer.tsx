import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";


export interface IToDo {
  todo:{
  id:string,
  title:string,
  complete:boolean
}}

export interface IState{
  toDos: Array<IToDo>
}

export interface IAddProp{
  addTodoItem: () => void
}

class TodoContainer extends React.Component <IState> {
  state = {
    toDos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
   };


   handleChange = (id:string) => {
    this.setState(prevState => ({
      toDos: prevState.toDos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }));
  };

  delTodo = (id:string) => {
    this.setState({
      todos: [
        ...this.state.toDos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = (title:string) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      toDos: [...this.state.toDos, newTodo]
    });
  };

  setUpdate = (updatedTitle, id:string) => {
    this.setState({
      toDos: this.state.toDos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItem={this.addTodoItem} />
          <TodosList
            toDos={this.state.toDos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer