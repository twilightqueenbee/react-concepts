import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateNotes = () => {
  const[formdata,setFormdata]=useState({
          title:"",
          description:"",
          tags:""
      })
      const {userId,notesId}=useParams()
      const navigate=useNavigate()
     const fetchNotes=async () => {
        try {
            const {data}=await axios.get(`http://localhost:3000/notes/${notesId}`)
            setFormdata(data)
        } catch (error) {
            console.log(error)
            toast.error("something went wrong",{position:"top-center"})
        }
     }

     useEffect(()=>{
        fetchNotes()
     },[])


  
      const handleInput=(e)=>{
          const{name,value}=e.target 
          setFormdata({...formdata,[name]:value})
      }
  
      const handleForm=async(e)=>{
          e.preventDefault()
        try {
            const {data}=await axios.put(`http://localhost:3000/notes/${notesId}`,formdata)
            toast.success("update successfully done",{position:"top-right"})
            navigate(`/dashboard/allnotes/${userId}`)
        } catch (error) {
            console.log(error)
            toast.error("somenthing went wrong",{position:"top-center"})
        }
      }
  
  
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Update Note</h2>
        
        <form className="space-y-4" onSubmit={handleForm}>
          {/* Note Title */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name='title'
              value={formdata.title}
              placeholder="Enter note title"
              onChange={handleInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
  
          {/* Note Description */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter note description"
              rows="4"
              name='description'
              value={formdata.description}
              onChange={handleInput}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>
  
          {/* Tags */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="tags">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name='tags'
              value={formdata.tags}
              onChange={handleInput}
              placeholder="Enter tags separated by commas"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
  
          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
             <Link to={`/dashboard/allnotes/${userId}`}> Cancel</Link>
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
             Update
            </button>
          </div>
        </form>
      </div>
    )
}

export default UpdateNotes