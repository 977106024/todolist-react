import React,{Component} from 'react'
import './TodoItem.css'


export default class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      iconCheboxnull:'icon icon-cheboxnull',
      active:'',
      iconDefchebox:'icon icon-defchebox',
      hide:'',
    }
  }
  render(){
    return (
      <div className="TodoItem">
        <div className="icon-wrap">
          <svg className={`${this.state.iconCheboxnull} ${this.state.active}`} aria-hidden="true">
            <use xlinkHref="#icon-cheboxnull"></use>
          </svg>
          <svg className={`${this.state.iconDefchebox} ${this.state.hide}`} aria-hidden="true">
            <use xlinkHref="#icon-defchebox"></use>
          </svg>
        </div>
        <input type="checkbox" className="toggle"
        checked={this.props.todo.status === 'completed'}
        onChange={this.toggle.bind(this)}/>
        <span className="title">{this.props.todo.title}</span>
        <button onClick={this.delete.bind(this)}>X</button>
      </div>
    )
  }
  toggle(e){
    this.props.onToggle(e,this.props.todo)
    if(this.props.todo.status === ''){
      this.setState({
        active:'',
        hide:''
      })
    }else if(this.props.todo.status === 'completed'){
      this.setState({
        hide:'hide',
        active:'active'
      })
    }
  }
  delete(e){
    this.props.onDelete(e,this.props.todo)
  }
}
