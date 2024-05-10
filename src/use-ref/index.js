import React, { useEffect, useRef } from 'react'

const InputRef = () => {
    const clrParagh = useRef(null);
    const colorList = ['#000000', '#d0d0d0', '#c5c5c5', '#ff0000', '#ffffff', '#f4f3f2', '#000000'];
    const selectedColor = useRef(null);
    const customColor = { current: null };

    useEffect(() => {
        console.log(clrParagh.current);
    });

    useEffect(() => {
        console.log('statement executd for selected color refhook changes');
    }, [selectedColor.current]);

    useEffect(() => {
        console.log('statement executd for custom color refhook changes');
    }, [customColor.current]);

    const handleClick = () => {
        const rndNum = Math.floor(Math.random() * colorList.length);
        clrParagh.current.style.color = colorList[rndNum];
        selectedColor.current = colorList[rndNum];
        console.log('selected color', selectedColor.current);
        customColor.current = colorList[rndNum];
        console.log('customColor', customColor.current);
    }
    return (
        <div>
            <button onClick={() => handleClick()}>Click me</button>
            <p ref={clrParagh}>Click on above button to change color</p>
        </div>
    )
}

export default InputRef