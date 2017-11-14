import React from 'react'
import './TodoInput.css'

// export default class TodoInput extends Component {
//   render (){
//     return <input className="TodoInput" type="text"
//     defaultValue={this.props.content}
//     onKeyPress={this.submit.bind(this)}
//     onChange={this.changeTitle.bind(this)}/>
//   }
//   submit(e){
//     if(e.key === 'Enter'){
//       this.props.onSubmit(e)
//     }
//   }
//   changeTitle(e){
//     this.props.onChange(e)
//   }
// }

function submit(props,e){
  if(e.key === 'Enter'){
    if(e.target.value.trim() !== ''){
      props.onSubmit(e)
    }
  }
}
function changeTitle(props,e){
  props.onChange(e)
}

export default function (props){
  return <input className="TodoInput" type="text" placeholder="Add a to-do"
  value={props.content}
  onKeyPress={submit.bind(this,props)}
  onChange={changeTitle.bind(this,props)}/>
}
