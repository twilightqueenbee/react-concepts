import React from 'react'
import Card from './Card'

const DefaultPropsConcept = () => {
    let data=[
        {
            username:"sundari",
            age:22
        },
        {
            age:23
        },
        {
            username:"sheela"
        }
    ]

    //  console.log(Boolean([]))
    // console.log(Boolean({}))
    // console.log(Boolean(""))
    // console.log(Boolean("23"))
    // console.log(Boolean(undefined))
    // console.log(Boolean(null))
    // console.log(Boolean(NaN))

  return (
    <div>
       {
        data.map((ele)=>{
            return(
                <Card user={ele}/>
            )
        })
       }
    </div>
  )
}

export default DefaultPropsConcept