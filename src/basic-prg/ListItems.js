import React from 'react';
import LineItem from './LineItem';

const ListItems = ({ items, handleCheck, handleDelete }) => {
    return (
        <div>
            <ul>
                {items.map((it) => (
                    <LineItem it={it} handleCheck={handleCheck} handleDelete={handleDelete} key={it.id} />
                ))}

            </ul>
        </div>
    )
}

export default ListItems