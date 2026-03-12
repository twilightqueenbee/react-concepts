import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AllNotes = () => {
    const [allnotes, setAllnotes] = useState(null)
    const {userId} = useParams()
    const fetchallnotes = async() => {
        try{
            const {data} = await axios.get("http://localhost:3000/notes")   
            const filterData = data.filter((note) => note.userId === userId)
            setAllnotes(filterData);
        } catch(error){
            toast.error("Something went wrong!", {position: "top-center"})
            console.log(error);
        }
    }

    useEffect(() => {
        fetchallnotes();
    }, [])
    console.log(allnotes);
    
  return (
    <div className='w-full h-auto flex flex-wrap'>
        {
            allnotes ?.map((note, index) =>{
                return(
                   <Fragment key={index}>
                     <NoteCard data={note}/>
                   </Fragment>
                )
            })
        }
    </div>
  )
}

export default AllNotes

// ! Optional chaining (?.) is a feature in JavaScript that allows you to safely access nested properties of an object without having to check if each level of the object exists. It prevents errors that would occur if you try to access a property of an undefined or null object. In the context of the code snippet, it is used to safely map over the allnotes array, ensuring that if allnotes is null or undefined, it won't throw an error and will simply return undefined instead.