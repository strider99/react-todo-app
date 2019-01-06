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
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} />

      </div>
    );
  }
}

export default App;
