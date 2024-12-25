import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function TableHeader() {
    return (
        <thead className='table-dark'>
            <tr className='text-center'>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Active</th>
                <th>Count</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

export default TableHeader
