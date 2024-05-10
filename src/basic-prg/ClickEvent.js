import React, { useState } from 'react';

const ClickEvent = () => {

    const [click, setClick] = useState('');

    function handleChange() {
        const name = ["Win", "Achieve", "Be Bold"];
        const randomNum = Math.floor(Math.random() * 3);
        setClick(name[randomNum]);
    }
    return (
        <div>
            <p>Born To <strong style={{ fontSize: "22px" }}>{click}</strong></p>
            <button className='btn' onClick={() => handleChange()}>Click me</button>
        </div>
    )
}

export default ClickEvent