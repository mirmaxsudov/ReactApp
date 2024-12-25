import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableBody.css';
import TableUserCounter from '../../count/TableUserCounter';

function TableBodyRow({ user: { id, firstName, lastName, phone, isActive, counter }, deleteUser, changeActive, changeCounter }) {
    return (
        <tr className='text-center'>
            <th scope="row">{id}</th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
            <td>
                <label>
                    <input type="checkbox" checked={isActive} onChange={() => changeActive(id)} />
                    <span class="checkbox-container"></span>
                </label>
            </td>
            <td>
                <TableUserCounter counter={counter} userId={id} changeCounter={changeCounter} />
            </td>
            <td>
                <button className='btn' onClick={() => {
                    deleteUser(id)
                }}>❌</button>
            </td>
        </tr>
    )
}

export default TableBodyRow