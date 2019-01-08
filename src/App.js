import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';


class App extends Component {
  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: uuid.v4(),
        completed: false
      },
      {
        title: 'Sleep well',
        id: uuid.v4(),
        completed: false
      },
      {
        title: 'Eat healthy stuff',
        id: uuid.v4(),
        completed: false
      }
    ]
  }


  addTodo = (title) => {
    console.log(title);
    const newTodos = [...this.state.todos, {title: title, id: uuid.v4(), completed: false}]
    this.setState({
      todos: newTodos
    })
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
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>

      </div>
    );
  }
}

export default App;
