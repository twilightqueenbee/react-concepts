import { useState } from "react"
import { MdDelete } from "react-icons/md"
import Table from "./Table"
import { Atom } from "react-loading-indicators"

const UseStateTask3=()=>{
    const [userData,setUserData]=useState([])
    const [loading,setloading]=useState(false)

    const fdata=async () => {
        setloading(true)
        try {
            const data=await fetch("https://api.github.com/users")
            const res=await data.json()
           setTimeout(()=>{
             setUserData(res)
             setloading(false)
           },1000)
            
        } catch (error) {
            console.log(error)
        }
    }
    const deleteUser=(id)=>{
            const filterUsers=userData.filter((ele)=>ele.id !== id)
            setUserData(filterUsers)
    }

    return(
        <div>
            UseStateTask3

            <button onClick={fdata}>Fetch Data</button>
            <div>
                {
                    loading?<div className="load">
                        <Atom color="#cc3131" size="large" text="loading...." textColor="#1e4ff2" />
                    </div>: <Table userData={userData} deleteUser={deleteUser}/>
                }
                
           
            </div>
        </div>
    )
}

export default UseStateTask3