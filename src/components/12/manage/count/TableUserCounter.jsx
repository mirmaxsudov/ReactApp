import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function TableUserCounter({ counter: { id, value }, userId, changeCounter }) {
    return (
        <div className='d-flex justify-content-around align-items-center'>
            <button className='btn border text-white' onClick={() => changeCounter(userId, "decrease")}>-</button>
            <span>{value}</span>
            <button className='btn border text-white' onClick={() => changeCounter(userId, "increase")}>+</button>
        </div >
    )
}

export default TableUserCounter