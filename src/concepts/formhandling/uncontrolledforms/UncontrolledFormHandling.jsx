import { useRef } from "react"
import { toast } from "react-toastify"

const UncontrolledFormHandling=()=>{
    const usernameRef=useRef(null)
    const passwordRef=useRef(null)
    const maleRef=useRef(null)
    const femaleRef=useRef(null)
    const othersRef=useRef(null)
    const handleForm=(e)=>{
        e.preventDefault()
       const username=usernameRef.current.value
       const password=passwordRef.current.value
      const gender=(maleRef.current.checked)?"male":(femaleRef.current.checked)?"female":(othersRef.current.checked)?"others":null

      console.log(gender)
    }
    return(
        <>
        <form onSubmit={handleForm}>
            <input type="text" placeholder="enter your name"  ref={usernameRef}/>
            <input type="password" placeholder="enter your password"  ref={passwordRef}/>

            <br />
            <label htmlFor="male">
                <input type="radio" value="male" id="male"  name="gender" ref={maleRef}/> Male
            </label>
          
            <label htmlFor="female">
                <input type="radio" value="female" id="female" name="gender" ref={femaleRef}/> Female
            </label>
              <label htmlFor="others">
                <input type="radio" value="others" id="others" name="gender" ref={othersRef}/>Others
            </label>
            <br />
            <button>Submit</button>
        </form>
        </>
    )
}

export default UncontrolledFormHandling