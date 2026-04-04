import React, { useState } from 'react'
import { Eye, EyeOff } from "lucide-react";
import { createDocument } from '../firebaseCRUD';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const RegisterUser = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    age: "",
    password: "",
    phone: "",
    imageUrl: "",
  });
  const navigate=useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForm=async(e)=>{
      e.preventDefault()
      console.log(form)
      try {
        const res=await createDocument("emps",form)
        console.log(res)
        toast.success("Employee createad 😆😆")
        setForm({
    username: "",
    email: "",
    age: "",
    password: "",
    phone: "",
    imageUrl: "",
  })
  navigate("/")
      } catch (error) {
        console.log(error)
        toast.error("you faild to create an employee 😭😭😭")
      }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join us and start your journey 🚀
        </p>

        <form className="space-y-5" onSubmit={handleForm}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="col-span-2 border border-gray-300 focus:ring-2 focus:ring-indigo-400 p-3 rounded-xl outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="col-span-2 border border-gray-300 focus:ring-2 focus:ring-indigo-400 p-3 rounded-xl outline-none transition"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 p-3 rounded-xl outline-none transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 p-3 rounded-xl outline-none transition"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-400 p-3 rounded-xl outline-none transition pr-10"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <input
            type="text"
            name="imageUrl"
            placeholder="Profile Image URL"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-400 p-3 rounded-xl outline-none transition"
          />

          {form.imageUrl && (
            <div className="flex items-center gap-4 mt-4 p-3 bg-gray-50 rounded-xl">
              <img
                src={form.imageUrl}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400"
              />
              <div>
                <p className="text-sm font-medium text-gray-700">Preview</p>
                <p className="text-xs text-gray-500">Your profile image</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <span className="text-indigo-600 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterUser