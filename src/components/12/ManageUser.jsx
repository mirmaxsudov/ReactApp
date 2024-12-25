import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './ManageUser.css'
import TableHeader from './table/header/TableHeader'
import TableBodyRow from './table/body/TableBody';

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

    // useEffect(() => {
    //     const users = JSON.parse(localStorage.getItem('users'))
    //     if (users)
    //         setUsers(users)

    //     console.log("did mount");
    // }, [])

    // useEffect(() => {
    //     console.log("did update");
    //     localStorage.setItem('users', JSON.stringify(users))
    // }, [users])

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

    return (
        <section className="manage-user pt-5">
            <Container>
                <div className="row">
                    <div className="col-2">
                        <button className="btn btn-light w-100" id="add-user-btn">
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
            </Container>
        </section>
    )
}