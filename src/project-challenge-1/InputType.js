import colorNames from 'colornames';
import React from 'react'

const InputType = ({ isDarkText, setIsDarkText, setColorValue, setHexValue }) => {
    const inputStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    }
    return (
        <div style={inputStyle}>
            <input type="text" className="input-box" placeholder='Enter Color Name' onChange={(e) => { setColorValue(e.target.value); setHexValue(colorNames(e.target.value)) }} />
            <button className="btn toggle-btn" onClick={() => setIsDarkText(!isDarkText)}>Toggle Text Color</button>
        </div>
    )
}

export default InputType