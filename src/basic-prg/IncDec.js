import React, { useState } from 'react'

const IncDec = () => {
    const [click, setClick] = useState(0);

    const handleInc = () => {
        console.log(click);

        if (click >= 0)
            setClick(click + 1);
        else
            setClick(<span style={{ color: 'red' }}>Can't be &lt; 0 </span>);
    }
    const handleDec = () => {
        if (click > 0)
            setClick(click - 1);
        else
            setClick(<span style={{ color: 'red' }}>Can't be &lt; 0 </span>);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <button className='btn' style={{ maxWidth: '10rem', margin: '0 auto' }} onClick={() => handleInc()}>+</button>
            <span style={{ fontSize: '22px' }}><strong>{click}</strong></span>
            <button className='btn' style={{ maxWidth: '10rem', margin: '0 auto' }} onClick={() => handleDec()}>-</button>
        </div>
    )
}

export default IncDec