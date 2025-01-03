import React, { useReducer, useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import './ManageUser.css'
import TableHeader from './header/TableHeader'
import TableBodyRow from './body/TableBody'

export default function ManageUser() {
    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: "Abdurahmon",
            lastName: "Mirmaxsudov",
            phone: "+998 99 999 99 99",
            isActive: true,
            counter: {
                id: 1,
                value: 0
            }
        }
    ])
    const [user, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "FIRST_NAME":
                    return {
                        ...state,
                        firstName: action.payload
                    }
                case "LAST_NAME":
                    return {
                        ...state,
                        lastName: action.payload
                    }
                case "PHONE":
                    return {
                        ...state,
                        phone: action.payload
                    }
                default:
                    return state
            }
        },

        users
    );
    const [showModal, setShowModal] = useState(false)

    function deleteUser(id) {
        setUsers(users.filter(user => user.id !== id))
    }

    function changeActive(id) {
        setUsers(users.map(user => {
            if (user.id === id)
                user.isActive = !user.isActive

            return user
        }))
    }

    function changeCounter(id, type) {
        setUsers(users.map(user => {
            if (type === "increase" && user.id === id) {
                user.counter.value++
            } else if (type === "decrease" && user.id === id) {
                user.counter.value--
            }

            return user
        }))
    }

    function handleCloseModal() {
        setShowModal(false)
    }

    function addUser() {
        const { firstName, lastName, phone } = user

        if (firstName.trim() && lastName.trim() && phone.trim())
            setUsers([
                ...users,
                {
                    id: Date.now(),
                    firstName,
                    lastName,
                    phone,
                    isActive: true,
                    counter: {
                        id: Date.now(),
                        value: 0
                    }
                }
            ])

        setShowModal(false)
        dispatch({ type: "FIRST_NAME", payload: "" })
        dispatch({ type: "LAST_NAME", payload: "" })
        dispatch({ type: "PHONE", payload: "" })
    }

    function renderModal() {
        return (
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column gap-4'>
                        <label >
                            First name
                            <input type="text" onChange={(e) => dispatch({ type: "FIRST_NAME", payload: e.target.value })} className="form-control w-100" placeholder='First name' />
                        </label>
                        <label >
                            Last name
                            <input type="text" onChange={(e) => dispatch({ type: "LAST_NAME", payload: e.target.value })} className="form-control w-100" placeholder='Last name' />
                        </label>
                        <label >
                            Phone number
                            <input type="text" onChange={(e) => dispatch({ type: "PHONE", payload: e.target.value })} placeholder='Phone number' className="form-control" />
                        </label>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        addUser()
                    }}>
                        Add
                    </Button>
                    <Button variant="dark" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    function handleShowModal() {
        setShowModal(true)

    }

    return (
        <>
            <section className="manage-user pt-5">
                <Container>
                    <div className="row">
                        <div className="col-2">
                            <button onClick={handleShowModal} className="btn btn-light w-100" id="add-user-btn">
                                Add
                            </button>
                        </div>
                        <div className="col-12 mt-5">
                            <table className="table table-striped">
                                <TableHeader />
                                <tbody className='table-dark'>
                                    {users.map(user => {
                                        return (
                                            <TableBodyRow
                                                key={user.id}
                                                user={user}
                                                deleteUser={deleteUser}
                                                changeActive={changeActive}
                                                changeCounter={changeCounter}
                                            />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {renderModal()}
                </Container>
            </section>
        </>
    )
}