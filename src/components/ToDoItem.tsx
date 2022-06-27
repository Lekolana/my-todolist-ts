import React, { CSSProperties } from "react"
import styles from "./TodoItem.module.css"


export interface IToDo{
    id:string,
    title:string,
    complete:boolean
}
export interface IToDoItemProps   {
  handleChangeProps: 
  deleteTodoProps: (id: string) => void,
  todo: IToDo
}
class ToDoItem extends React.Component<IToDoItemProps, {editing: boolean}> {
  state = {
    editing: false,
  };

  handleEditing = () => {
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
      <div onDoubleClick={this.handleEditing} style={viewMode}>
        
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={complete ? completedStyle : undefined}>{title}</span>
      </div>
      <input 
         type="text"
         style={editMode}
         className={styles.textInput}
         value={title}
         onChange={e => {
         this.props.setUpdate(e.target.value, id)}}
         onKeyDown={this.handleUpdatedDone}
         />
      </li>
    )
  }
}

export default ToDoItem