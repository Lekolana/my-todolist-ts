import React, { CSSProperties } from "react"
import styles from "./TodoItem.module.css"


export interface IToDo{
    id:string,
    title:string,
    complete:boolean
}
export interface IProps   {
setUpdate:(value:string, id:string) =>void
 deleteTodoProps: (id: string) => void,
 todo: IToDo,
}




class ToDoItem extends React.Component<IProps, {editing: boolean}> {
  state = {
    editing: false,
  };

  handleChange = () => {
    this.setState({
      editing: true,
    })
  };

  handleUpdatedDone = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter"){
      this.setState({ editing: false })
    }
  }

  

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { complete, id, title } = this.props.todo;
    
    const viewMode: CSSProperties = {}
    const editMode: CSSProperties = {}
    
    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    };


    return (
      <li className={styles.item}>
      <div onDoubleClick={this.handleChange} style={viewMode}>
        
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={complete ? completedStyle : undefined}>{title}</span>
      </div>
      <input 
         type="text"
         style={editMode}
         className={styles.textInput}
         value={title}
         onKeyDown={this.handleUpdatedDone}
         />
      </li>
    )
  }
}

export default ToDoItem

