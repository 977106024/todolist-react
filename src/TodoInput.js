import React,{Component} from 'react'

export default class TodoInput extends Component {
  render (){
    return <input className="TodoInput" type="text"
    defaultValue={this.props.content}
    onKeyPress={this.submit.bind(this)}
    onChange={this.changeTitle.bind(this)}/>
  }
  submit(e){
    if(e.key === 'Enter'){
      this.props.onSubmit(e)
    }
  }
  changeTitle(e){
    this.props.onChange(e)
  }
}
