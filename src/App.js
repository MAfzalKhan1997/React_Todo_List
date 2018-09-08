import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Navigation from '@material-ui/icons/Navigation';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import 'typeface-roboto';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: ["Breakfast","Lunch"],
      text: '',
      currentIndex: null
    }

    this.add = this.add.bind(this);
    this.updateText = this.updateText.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  updateText(e) {
    this.setState({text: e.target.value.toLowerCase()})
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
    <col width="7%"/>
    <col width="87%"/>
    <col width="3%"/>
    <col width="3%"/>
        
     <tbody className ="tBody"> 
      {todos.map((val,index)=>{
     
     return <tr className ="tRow">
              <td>{index+1+"."}</td>
              <td>{val}</td> 
              <td><IconButton id="editBtn" color="primary" onClick={()=>this.edit(index)}>
              <EditIcon/>
              </IconButton></td>
              <td><IconButton id="delBtn" color="secondary" onClick={()=>this.delete(index)}>
              <DeleteIcon/>
              </IconButton></td>
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
        <div className="inputArea">
        {/* <input 
          placeholder="Enter something"
          maxLength="17"
          onChange={this.updateText}
          value={this.state.text}
          /> */}
        <TextField
          placeholder="e.g:Attend Meeting"
          label="Add Work ToDo"
          maxLength="17"
          onChange={this.updateText}
          value={this.state.text}
        />
          <br/>
        {currentIndex == null ? 
          <Button variant="fab" mini color="primary" onClick={this.add}>
          <AddIcon/>
          </Button>
          : 
          <div>
            <Button variant="fab" mini size="medium" color="primary"  onClick={() => this.updateTodo(currentIndex)}>
            <Navigation/> 
            </Button> &nbsp;
            <Button  variant="fab" mini size="medium" color="secondary" onClick={this.cancel}>
            <ArrowBackIos/> 
            </Button>
          </div>
        }
        <br/>
        {currentIndex != null && <h3>Editing ToDo # {currentIndex + 1} </h3>}
        </div>
        {this.renderTodos()}
 </center>
      </div>
    );
  }
}

export default App;
