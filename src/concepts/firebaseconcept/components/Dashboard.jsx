import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Mail, Phone, Calendar } from "lucide-react";
import { deleteDocument, fetchDocuments } from '../firebaseCRUD';
import { toast } from 'react-toastify';
const Dashboard = () => {
    const [users,setUsers] = useState([]);

const fetchEmps=async () => {
   const result=await fetchDocuments("emps")
   setUsers(result)
}


useEffect(()=>{
 fetchEmps()
},[])



const userDelete=async (id) => {
   try {
     await deleteDocument("emps",id)
    toast.success("You finished the emplyoeed 🔪🔪🔪")
    fetchEmps()
   } catch (error) {
    console.log(error)
    toast.error("You filed to finish")
   }
}

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold">User Dashboard</h1>
        <button className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
          <Plus size={18} /> <Link to="/register">Add User</Link>
        </button>
      </div>

      {/* Stats */}
      <div className="p-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-60">
          <h2 className="text-gray-500 text-sm">Total Users</h2>
          <p className="text-4xl font-bold text-indigo-600 mt-2">
            {users.length}
          </p>
        </div>
      </div>

      {/* User Cards */}
      <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <img
              src={user.imageUrl}
              alt={user.username}
              className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
            />

            {/* Name */}
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              {user.username}
            </h2>

            {/* Details */}
            <div className="mt-3 space-y-2 text-sm text-gray-600 w-full">
              <div className="flex items-center gap-2 justify-center">
                <Mail size={16} /> {user.email}
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone size={16} /> {user.phone}
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Calendar size={16} /> Age: {user.age}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-5 w-full">
              <button onClick={()=>userDelete(user.id)} className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm hover:bg-red-700 transition">
               Delete
              </button>
              <Link to={`/updateuser/${user.id}`} className="flex-1 border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-100 transition">
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-xl transition">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}

export default Dashboard