import React, { useEffect, useState } from 'react'

const UseEffectUsage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('The Count is' + count);
        // return () => {
        //     console.log('Optional Return statement...');
        // }
    }, [count])

    return (
        <div>
            <h3>Count: {count}</h3>
            <div style={{
                margin: '0 auto',
                display: 'flex',
                gap: '20px',
                justifyContent: 'center'
            }}>
                <button className="btn" onClick={() => {
                    setCount(count + 1)
                }}>Increment</button>
                <button className="btn" onClick={() => {
                    setCount(count - 1)
                }}>Decrement</button>
            </div>
        </div>
    )
}

export default UseEffectUsage;