import React, { Fragment } from 'react'

const ListAndKeys = () => {
    let arr=['sundari','sheela','leela','urmila','shakila']
  return (
    <div>
        {
            arr.map((ele,index)=>{
                return(
                  
                    <Fragment key={index}>
                        <h1 >{ele}</h1>
                        <p>ii</p>
                    </Fragment>
                )
            })
        }
    </div>
  )
}

export default ListAndKeys