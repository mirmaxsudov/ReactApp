import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './ToDoCard.css'

export default class ToDoCard extends Component {
    render() {
        const { todo, doneTodo, showDetails, deleteToDo } = this.props;
        return (
            <div className='my-3 w-100 todo-card d-flex justify-content-between align-items-center' key={todo.id} >
                <div className='my-auto'>
                    <p>{todo.text}</p>
                </div>
                <div className='todo-options d-flex gap-3'>
                    <i onClick={() => doneTodo(todo.id)} class="bi bi-check-lg"></i>
                    <i onClick={() => deleteToDo(todo.id)} class="bi bi-trash"></i>
                    <i onClick={() => showDetails(todo)} class="bi bi-pencil"></i>
                </div>
            </div >
        )
    }
}
