import React, { useRef } from 'react'
import "./userefhook.css"
const UseRefHookTask1 = () => {

    const themeRef=useRef()
    const changeTheme=()=>{
        themeRef.current.classList.toggle("dark")
    }
  return (
    <div className='homepage demo remo' ref={themeRef}>
        <button onClick={changeTheme}>Theme</button>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis laboriosam neque officia cumque, aut sit porro nostrum ipsa quod vel eum itaque vero ratione deserunt obcaecati, !</p>

    </div>
  )
}

export default UseRefHookTask1