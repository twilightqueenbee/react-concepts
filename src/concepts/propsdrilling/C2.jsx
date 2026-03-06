import React from 'react'
import C3 from './C3'

const C2 = ({data}) => {
    let updateval={...data,message:"i hate you"}
  return (
    <div>
        <C3 data={updateval}/>
    </div>
  )
}

export default C2