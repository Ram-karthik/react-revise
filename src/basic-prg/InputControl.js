import React, { useRef } from 'react';
import { IoMdAdd } from "react-icons/io";

const InputControl = ({ newItem, setNewItem, handleSubmit }) => {

    const inputRef = useRef();
    return (
        <div className='add-item'>
            <form onSubmit={handleSubmit}>
                <label>Add item</label>
                <input type='text' id='inputfield' ref={inputRef} value={newItem} autoFocus required onChange={(e) => setNewItem(e.target.value)} />
                <button onClick={() => inputRef.current.focus()}>
                    <IoMdAdd />
                </button>
            </form>
        </div>
    )
}

export default InputControl