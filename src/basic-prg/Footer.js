import React from 'react'

const Footer = ({ length }) => {
    return (
        <div className='page-bg'>
            {length} list {length === 1 ? 'item' : "items"}
        </div>
    )
}

export default Footer 