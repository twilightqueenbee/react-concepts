import React, {useState} from "react";

const UseStateCase1 = () => {
    const [count, setCount] = useState(0)
    console.log(count);
    // const updateVal = () => {
    //     setCount(count + 1)
    // }
    // updateVal()
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick= {() => {setCount(count + 1)}}>Click</button>
        </div>
    )
    
}

export default UseStateCase1