import React from "react";

const JsxExpression = () =>{
    // JSX expression is used to access the js variables or functions indise the JSX | html
    // Syntax: {}

    //! NOTE: inside the JSX expression is not possible to declare a variable but initialization is possible

    //! How to use JS functions  || how to call js functions

    //! If a  function is returning a JSX element then only we call it as a Component. If it is not returning any JSX element then it is a JS function.

    //! Inside a JSX expression Using of loops and other conditional statements is strictly prohibitated as react will get confused because of the presence of curly braces thinking it as an expression.
    
    //! Instead of conditional statement we can use Ternary operator.

    //! Inside a JSX expression if you want to use loop then map method   
    let username = "sundari"
    
    let demo =() =>{
        console.log("demo function");
        
    }

    let is_active = true
    if(is_active === true)
    {
        console.log("true block");
    }
    else
    { 
        console.log("false block");
        
    }

    let arr = ["sundari", "sheela", "mala", "leela"]
    return (
        <div>
            {/* <h1>{username}</h1>
             {username = "leela"}
            <br />
            {username} */}

            {/* {
                let val = 20;
            } */}

             {/* React uses synthetic events and will not use DOM events where the function name will be in the form of Camel case. */}
           <button onClick={demo()}>Click</button>
           
           {/* {
               if({is_active== true}){

               }
           } */}
            
            {/* Ternary operator */}
           {
            is_active ? <h1>I am safe</h1> : <h1>I am dead</h1>
           }

           {/* Array */}
           {/* {
            arr.map((user)=>{
                 return(
                        <h1>{user}</h1>
                 )
            })
           } */}
           <h1>{arr[0]}</h1>
            <h1>{arr[1]}</h1>
             <h1>{arr[3]}</h1>
             <hr />

             {
                arr.map((ele)=>{
                      return <h1>{ele}</h1>
                })
             }
        </div>
    )
}

export default JsxExpression