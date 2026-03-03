import React from "react";

const Child =(props) =>{
    console.log(props);
    
    return(
        <div>
           <h1>{props.name}</h1>
           <p>{props.age}</p>
           <p>{props.email}</p> 
           <hr />
        </div>
    )
}

export default Child