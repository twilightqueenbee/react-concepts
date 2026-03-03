import React from 'react'

const Child = ({name}) => {
    console.log("child");
    
  return (
    <div>{name}</div>
  )
}

export default React.memo(Child);