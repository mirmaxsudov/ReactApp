import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MainToDo.css';

import ToDoCard from './todoCard/ToDoCard';
import ToDoCardDone from './todoCard/ToDoCardDone';

export default class MainToDo extends Component {
    state = {
        todos: [
            {
                id: 1,
                text: "Buy milk",
                isDone: false
            }
        ],
        showModal: false,
        selectedTodo: null
    };

    todoInputRef = React.createRef();

    addNewToDo = () => {
        const text = this.todoInputRef.current.value;

        if (!text || !text.trim()) return;

        const newTodo = {
            id: Date.now(),
            text,
            isDone: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });

        this.todoInputRef.current.value = '';
    };

    doneTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ? { ...todo, isDone: true } : todo
            )
        });
    };

    deleteToDo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    unDone = (id) => {
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ? { ...todo, isDone: false } : todo
            )
        });
    }

    handleShowModal = (todo) => {
        this.setState({ showModal: true, selectedTodo: todo });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false, selectedTodo: null });
    };

    handleEditTodo = (todo, nText) => {
        todo.text = nText
        this.setState({
            todos: this.state.todos.map(t =>
                t.id === todo.id ? { ...t, text: nText } : t
            )
        });
    }

    renderModal() {
        const { showModal, selectedTodo } = this.state;

        return (
            <Modal show={showModal} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Todo Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedTodo ? (
                        <div className=''>
                            <label >
                                Id
                                <input type="text" value={selectedTodo.id} readOnly className="form-control w-25" />
                            </label>
                            <label >
                                Text
                                <input onChange={(e) => {
                                    this.handleEditTodo(selectedTodo, e.target.value)
                                }} type="text" value={selectedTodo.text} className="form-control w-100" />
                            </label>
                            <label >
                                Is Done
                                <input type="text" value={selectedTodo.isDone ? "Done" : "Not Done"} readOnly className="form-control" />
                            </label>
                        </div>
                    ) : (
                        <p>No todo selected.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    render() {
        const doneTodos = this.state.todos.filter(todo => todo.isDone);
        const notDoneTodos = this.state.todos.filter(todo => !todo.isDone);

        return (
            <div className='todo d-flex justify-content-center align-items-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <div className="todo-wrapper mt-5">
                                <div className="todo-top d-flex justify-content-between align-items-center gap-3">
                                    <input ref={this.todoInputRef} type="text" placeholder="Add a new task" className='todo-input' />
                                    <button onClick={this.addNewToDo} className='todo-add-btn d-flex justify-content-center align-items-center'>
                                        <span>+</span>
                                    </button>
                                </div>
                                <div className="todo-body">
                                    <h4 className='todo-title'>Tasks to do - {notDoneTodos.length}</h4>
                                    {notDoneTodos.map(todo => (
                                        <ToDoCard
                                            key={todo.id}
                                            todo={todo}
                                            doneTodo={this.doneTodo}
                                            deleteToDo={this.deleteToDo}
                                            showDetails={this.handleShowModal}
                                        />
                                    ))}
                                </div>
                                <div className="todo-footer">
                                    <h4 className='todo-title'>Done - {doneTodos.length}</h4>
                                    {doneTodos.map(todo => (
                                        <ToDoCardDone
                                            key={todo.id}
                                            todo={todo}
                                            unDone={this.unDone}
                                            showDetails={this.handleShowModal}
                                        />
                                    ))}
                                </div>
                                {this.renderModal()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}