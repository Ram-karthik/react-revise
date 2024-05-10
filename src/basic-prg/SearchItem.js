import React from 'react'

const SearchItem = ({ searchItem, setSearchItem }) => {
    return (
        <div style={{ paddingLeft: "30px" }}>
            <form onSubmit={(e) => e.preventDefault()}>
                <label style={{ position: 'absolute', left: "-9999px" }}>Search items</label>
                <input type='text' placeholder='search items' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} style={{ height: '54px' }} />
            </form>
        </div>
    )
}

export default SearchItem