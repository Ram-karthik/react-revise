import React from 'react';
import { MdDelete } from 'react-icons/md'

const LineItem = ({ it, handleCheck, handleDelete }) => {
    return (
        <div>
            <li style={{ marginBottom: "20px", listStyle: "none" }} key={it.id}>
                <input type='checkbox' onChange={() => handleCheck(it.id)} className={(it.checked) ? 'active' : ''} />
                <label style={{ marginLeft: "15px", marginRight: "15px" }}>{it.item}</label>
                <MdDelete className='del-icon' onClick={() => handleDelete(it.id)} />
            </li>
        </div>
    )
}

export default LineItem