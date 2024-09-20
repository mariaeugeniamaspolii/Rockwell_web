import React from 'react'

const ListItem = ({ song: { id, name, duration }, index }) => {
    return (
        <div className='d-flex justify-content-between w-100 border-bottom border-gray'>
            <p className='mt-3' key={id}><span className='me-2 text-dark'>{index + 1 + '.'}</span>{name}</p>
            <span className='align-self-center text-dark'>{duration}</span>
        </div>
    )
}

export default ListItem;