import React from "react";
import Child from "./Child";

const Parent =() =>{
    let childname = "kavya"
    return(
        <div id='parent' className='parent'>
              <Child name = {childname} age = {22} email = "kavya@gmail.com"/>
              <Child name = "sundari" age ={22} email= "sundari@gmail.com"/>
               <Child name = "leela" age ={28} email= "leela@gmail.com"/>
                <Child name = "mala" age ={27} email= "mala@gmail.com"/>
        </div>
    )
}

export default Parent