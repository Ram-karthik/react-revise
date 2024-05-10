import React from 'react'

const DisplayBox = ({ colorValue, isDarkText, hexValue }) => {
    const styleBox = {
        backgroundColor: colorValue,
        color: isDarkText ? 'black' : 'white'
    }
    return (
        <div className='display-box' style={styleBox}>
            <p>{colorValue ? colorValue : 'Empty Value'}</p>
            <p className='m-0'>{hexValue ? hexValue : null}</p>
        </div>
    )
}

export default DisplayBox