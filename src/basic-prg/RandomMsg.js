import React from 'react';

const RandomMsg = () => {
    function handleChange() {
        const name = ["Win", "Achieve", "Be Bold"];
        const randomNum = Math.floor(Math.random() * 3);
        return name[randomNum];
    }

    return (
        <div>
            <p>Born To <strong style={{ fontSize: "22px" }}>{handleChange()}!</strong></p>
        </div >
    )
}

export default RandomMsg