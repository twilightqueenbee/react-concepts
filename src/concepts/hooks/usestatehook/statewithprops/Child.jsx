import React, { useState } from "react";

const Child = ({count, setCount}) => {
    console.log("child");
    const [val, setVal] = useState(10)
    
    return (
        <div>
           <h2>{count} in child</h2>
           <h2>{val} in child</h2>
           <button onClick={() => setVal(val + 10)}>update val</button>
        </div>
    )
}

export default Child