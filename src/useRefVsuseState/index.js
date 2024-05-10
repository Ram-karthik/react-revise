import React, { useRef, useState } from 'react'

const UseRefUse = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        setCount(count + 1);
        countRef.current++;

        console.log("count: " + count);
        console.log("countRef: " + countRef.current);
    }

    return (
        <div className='d-flex'>
            <p>Count: <strong>{count}</strong></p>
            <button className='btn' onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UseRefUse