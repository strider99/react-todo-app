import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  state = {
    todos:  []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({
          todos: res.data
        })
      })
  }


  addTodo = (title) => {
    console.log(title);
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => {

      const newTodos = [...this.state.todos, res.data]
      this.setState({
        todos: newTodos
      });
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {

        const newTodos = this.state.todos.filter(todo =>  todo.id !== id);
        this.setState({
          todos: newTodos
        })
      })
  }


  render() {
    return (
      <Router>

        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>

                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />

          </div>

        </div>
      </Router>
    );
  }
}

export default App;
