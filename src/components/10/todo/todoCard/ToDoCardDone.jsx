import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./ToDoCard.css"

export default class ToDoCardDone extends Component {
    render() {
        const { todo, unDone } = this.props;

        return (
            <div className='my-3 w-100 todo-card d-flex justify-content-between align-items-center' key={todo.id} >
                <div className='my-auto'>
                    <p className='todo-done-text'>{todo.text}</p>
                </div>
                <div className='todo-options d-flex gap-3'>
                    <i onClick={() => unDone(todo.id)} class="bi bi-x" style={{ fontSize: "1.5rem" }}></i>
                </div>
            </div >
        )
    }
}
