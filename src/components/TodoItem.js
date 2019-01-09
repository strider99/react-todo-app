import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { white } from 'ansi-colors';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through': 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()} >

        <p>
          <input type="checkbox" name="" id="" onChange={(e) => this.props.markComplete(id,e)} /> {' '}
          {title}
          <button style={btnStyle} onClick={(e) => this.props.delTodo(id,e) } >X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
