import React, { Component} from "react"

interface IState{
  title:string,
}
 interface IProps{
  addTodoItem:(title:string) => void,
 
  }
class InputTodo extends Component<IProps,IState> {
  state = {
    title: "",
  }
  onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({[e.target.title]: e.target.value})
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoItem(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
  <input
    type="text"
    className="input-text"
    placeholder="Add todo..."
    value={this.state.title}
    name="title"
    onChange={this.onChange}
  />
  <button className="input-submit">Submit</button>
</form>
    )
  }
}
export default InputTodo