import React from 'react'

// export default class SignUpForm extends Component {
//   render(){
//     return (
//       <form className="signUp" onSubmit={this.props.onSubmit.bind(this)}>
//         <div className="row">
//           <label>邮箱</label>
//           <input type="text" value={this.props.formData.email}
//           onChange={this.props.onChange.bind(this,'email')}/>
//         </div>
//         <div className="row">
//           <label>用户名</label>
//           <input type="text" value={this.props.formData.username}
//           onChange={this.props.onChange.bind(this,'username')}/>
//         </div>
//         <div className="row">
//           <label>密码</label>
//           <input type="text" value={this.props.formData.password}
//           onChange={this.props.onChange.bind(this,'password')}/>
//         </div>
//         <div className="row actions">
//           <button type="submit">注册</button>
//         </div>
//       </form>
//     )
//   }
// }

export default function (props){
  return (
    <form className="signUp" onSubmit={props.onSubmit.bind(this)}>
      <div className="row">
        <input type="text" placeholder="Email"
        value={props.formData.email}
        onChange={props.onChange.bind(this,'email')}/>
      </div>
      <div className="row">
        <input type="text" placeholder="Username"
        value={props.formData.username}
        onChange={props.onChange.bind(this,'username')}/>
      </div>
      <div className="row">
        <input type="text" placeholder="Password"
        value={props.formData.password}
        onChange={props.onChange.bind(this,'password')}/>
      </div>
      <div className="row actions">
        <button type="submit">注册</button>
      </div>
    </form>
  )
}
