import React from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentText: ''
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newText = this.state.currentText
    if(newText !==""){
      const items = [...this.state.items, {
        text: newText,
        key:this.state.items.length + 1,
        completed: false
      }]
    this.setState({
      items: items,
      currentText: ''
    })
    }
  }
  handleInput(e){
    this.setState({
      currentText: e.target.value
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    const items = this.state.items;
    items.forEach(item => {
        item.text= item.key===key ? text : item.text
    })
    this.setState({
      items: items
    })
  }

  completeTask(key){
    const items = this.state.items;
    items.forEach(item => {
        item.completed = item.key === key ? !item.completed : item.completed
    })
    items.sort((a, b) => a.completed > b.completed ? 1 : a.completed < b.completed ? -1 : 0)
    this.setState({
      items: items
    })
  }
 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentText} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        
          {!!this.state.items && <ListItems items={this.state.items} deleteItem={this.deleteItem} completeTask={this.completeTask} setUpdate={this.setUpdate}/>}
        
      </header>
    </div>
  );
 }
}


export default App;
