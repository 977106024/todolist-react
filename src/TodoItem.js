import React,{Component} from 'react'
import './TodoItem.css'


export default class TodoItem extends Component {
  render(){
    return (
      <div className="TodoItem">
        <div className="icon-wrap">
          <svg className={"icon icon-cheboxnull" + " " + (this.props.todo.status === "completed" ? "active" : null)} aria-hidden="true">
            <use xlinkHref="#icon-cheboxnull"></use>
          </svg>
          <svg className={"icon icon-defchebox" + " " + (this.props.todo.status === "" ? null : "hide")} aria-hidden="true">
            <use xlinkHref="#icon-defchebox"></use>
          </svg>
        </div>
        <input type="checkbox" className="toggle"
        checked={this.props.todo.status === "completed"}
        onChange={this.toggle.bind(this)}/>
        <span className="title">{this.props.todo.title}</span>
        <button onClick={this.delete.bind(this)}>X</button>
      </div>
    )
  }
  toggle(e){
    this.props.onToggle(e,this.props.todo)
  }
  delete(e){
    this.props.onDelete(e,this.props.todo)
  }
}
