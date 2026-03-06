import React from 'react'

const Card = (props) => {
    const {username}=props.data
  return (
    <div className='card'>
        <h1>{username}</h1>
    </div>
  )
}

export default Card