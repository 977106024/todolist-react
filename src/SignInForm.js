import React from 'react'

// export default class SignInForm extends Component {
//   render (){
//     return (
//       <form className="signIn" onSubmit={this.props.onSubmit}>
//         <div className="row">
//           <label>用户名</label>
//           <input type="text" value={this.props.formData.username}
//           onChange={this.props.onChange.bind(null,'username')}/>
//         </div>
//         <div className="row">
//           <label>密码</label>
//           <input type="password" value={this.props.formData.password}
//           onChange={this.props.onChange.bind(null,'password')}/>
//         </div>
//         <div className="row actions">
//           <button type="submit">登陆</button>
//           <a href="#" onClick={this.props.onForgotPassword}>忘记密码了?</a>
//         </div>
//       </form>
//     )
//   }
// }

export default function(props){
  return (
    <form className="signIn" onSubmit={props.onSubmit}>
      <div className="row">
        <input type="text" placeholder="Username"
        value={props.formData.username}
        onChange={props.onChange.bind(null,'username')}/>
      </div>
      <div className="row">
        <input type="password" placeholder="Password"
        value={props.formData.password}
        onChange={props.onChange.bind(null,'password')}/>
      </div>
      <div className="row actions">
        <button type="submit">登陆</button>
        <a href="#" onClick={props.onForgotPassword}>忘记密码了?</a>
      </div>
    </form>
  )
}
