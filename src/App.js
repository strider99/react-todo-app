import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: 1,
        completed: false
      },
      {
        title: 'Sleep well',
        id: 2,
        completed: false
      },
      {
        title: 'Eat healthy stuff',
        id: 3,
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    this.setState({
      todos: newTodos
    });
  }

  delTodo = (id) => {
    const newTodos = this.state.todos.filter(todo =>  todo.id !== id);
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />

      </div>
    );
  }
}

export default App;
