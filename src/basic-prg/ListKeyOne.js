import React, { useState } from 'react'
import ListItems from './ListItems'

const ListKeyOne = ({ items, handleCheck, handleDelete }) => {
  return (
    <div style={{ maxWidth: "fit-content", margin: "auto" }}>
      {
        items.length ? (
          <ListItems items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
        ) : (<p style={{ fontSize: "20px" }}>No data to show</p>)
      }

    </div>
  )
}

export default ListKeyOne