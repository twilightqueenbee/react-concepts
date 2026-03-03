const TernaryRender = () => {
//    let value = false
//    return (
//     <div>
//         {value? <h1>Hello</h1>:<h1>Bye</h1>}
//     </div>
//    )

// ! Nested if else in Ternary operator

let value = false
let per = 80
let theme = "light"
   return (
    <div>
        {per > 70?<p>A Grade</p>: (per > 50 && per < 70) ? <p>B Grade</p>:<p>Fail</p>}
        <br />
        <br />
         
         {/* conditional rendering in inline css */}
        <h1 style={theme==="dark"?{backgroundColor: "red"}:{backgroundColor: "blue"}}>Sundari</h1>
        <br />
        <br />
         
         {/* conditional rendering inside a className */}
        <div className={`box ${theme === "dark"?"dark":"light"}`}></div> 
        {/* ``: string value to be taken as input */}

    </div>
   )
}

export default TernaryRender