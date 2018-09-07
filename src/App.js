import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
// import 'typeface-roboto';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      text: '',
      currentIndex: null
    }

    this.add = this.add.bind(this);
    this.updateText = this.updateText.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  updateText(e) {
    this.setState({text: e.target.value})
  }

  add() {
    const {text, todos} = this.state;
    todos.push(text);
    this.setState({
      todos, 
      text: ''
    });
  }

  edit(index) {
    const {todos} = this.state;
    
    this.setState({
      text: todos[index], 
      currentIndex: index
    })
  }

  delete(index) {
    const {todos} = this.state;
    todos.splice(index, 1);

    this.setState({
      todos, 
      text:'',
      currentIndex: null
    });
  }

  updateTodo(index){
    const {todos,text} = this.state;
    todos[index]=text;
    
    this.setState({
      todos,
      text:'',
      currentIndex:null
    })

  }

  cancel() {
    this.setState({
      text: '', 
      currentIndex: null
    })
  }

  
  renderTodos() {
    const {todos} = this.state;

    return  <table className="todoTable">
    <col width="5%"/>
    <col width="75%"/>
    <col width="10%"/>
    <col width="10%"/>
    <thead className ="tHead">
      <tr className ="tRow">
         <th>S.No</th>
         <th>ToDos</th>
         <th>Edit</th>
         <th>Delete</th>
      </tr>
    </thead>
    
     <tbody className ="tBody"> 
      {todos.map((val,index)=>{
     
     return <tr className ="tRow">
              <td>{index+1}</td>
              <td>{val}</td> 
              <td><button id="editBtn" onClick={()=>this.edit(index)}>Edit</button></td>
              <td><button id="delBtn" onClick={()=>this.delete(index)}>X</button></td>
            </tr>
      })}
    </tbody>
    
    </table>  
  }

  render() {
    const {currentIndex} = this.state;

    return (
      <div className="App">
 <center>
        <input 
          placeholder="Enter something"
          onChange={this.updateText}
          value={this.state.text}
          />
        {currentIndex == null ? 
          <button onClick={this.add}>Add</button>
          : 
          <div>
            <button onClick={() => this.updateTodo(currentIndex)}>Update</button>
            <button onClick={this.cancel}>Cancel</button>
          </div>
        }
        <br/>
        {currentIndex != null && <p>Editing ToDo # {currentIndex + 1} </p>}

        {this.renderTodos()}
 </center>
      </div>
    );
  }
}

export default App;
