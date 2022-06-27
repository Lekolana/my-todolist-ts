import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";


export interface IToDo {
  id:string,
  title:string,
  complete:boolean
}

export interface IState{
  toDos: Array<IToDo>
}


class TodoContainer extends React.Component <{}, IState>   {
  state = {
    toDos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        complete: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        complete: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        complete: false
      }
    ]
   };


   handleChange = (id:string) => {
    const newState: IToDo[] = this.state.toDos.map(todo => ({...todo, complete: todo.id === id ? true : todo.complete }))
    this.setState({toDos: newState})

  };

  delTodo = (id:string) => {
    this.setState({
      toDos: [
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

  setUpdate = (updatedTitle: string, id:string) => {
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
          <ToDoList
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