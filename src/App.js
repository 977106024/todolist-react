import React, { Component } from 'react';
import './App.css';
import 'normalize.css'
import './reset.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import UserDialog from './UserDialog'
import {getCurrentUser,signOut,TodoModel} from './leanCloud'
import {getDay} from './GetDay'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: getCurrentUser() || {},
      day:getDay(),
      newTodo: '',
      todoList: []
    }
    let user = getCurrentUser()
    if(user){
      TodoModel.getByUser(user,(todos)=>{
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        this.setState(stateCopy)
      })
    }
  }
  render() {
    let todos = this.state.todoList
    .filter((item)=>!item.deleted)
    .map((item,index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
          onDelete={this.delete.bind(this)}/>
        </li>
      )
    })
    return (
      <div className="App">
        <div className="bg">
          <div className="signOut">
            {this.state.user.id ? <button onClick={this.signOut.bind(this)}>登出</button> : null}
          </div>
          <h1>{this.state.user.username||'我'}的待办</h1>
          <div className="todoy">Today is <span>周{this.state.day}</span></div>
        </div>
        <ol className="todoList">
          {todos}
        </ol>
        <div className="inputWrapper">
          <svg className="icon icon-jiahao" aria-hidden="true">
            <use xlinkHref="#icon-jiahao"></use>
          </svg>
          <TodoInput contet={this.state.newTodo}
          onSubmit={this.addTodo.bind(this)}
          onChange={this.changeTitle.bind(this)}/>
        </div>
        {this.state.user.id ?
          null :
          <UserDialog
          onSignUp={this.onSignUpOrSignIn.bind(this)}
          onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
      </div>
    );
  }
  signOut(){
    signOut()
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = {}
    this.setState(stateCopy)
  }
  onSignUpOrSignIn(user){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy)
  }
  toggle(e,todo){
    let oldStatus = todo.status
    todo.status = todo.status === 'completed' ? '' : 'completed'
    TodoModel.update(todo,()=>{
      this.setState(this.state)
    },(error)=>{
      todo.status = oldStatus
      this.setState(this.state)
    })
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  addTodo(event){
    let newTodo = {
      title:event.target.value,
      status:'',
      deleted:false
    }
    TodoModel.create(newTodo,(id)=>{
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    },(error)=>{
      console.log(error)
    })
  }
  delete(e,todo){
    TodoModel.destroy(todo.id,()=>{
      todo.deleted = true
      this.setState(this.state)
    })
  }
}

export default App;
