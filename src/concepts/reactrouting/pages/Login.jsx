import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    
    const handleChange = (e) => {
        // const navigate = useNavigate();
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem("jwt_token", JSON.stringify("cffugutdghou87657ghbjkj"))
        // navigate("/dashboard")
        console.log("Login Attempt with:", formData);
        // You can add your authentication logic here
        alert(`Logging in with: ${formData.email}`);
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email} // Controlled component
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:bg-amber-700"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password} // Controlled component
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Submit Button - Styled to match your Navbar's Green/Logo theme */}
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white transition duration-200 bg-amber-700 rounded-md hover: bg-amber-600 font-semibold"
                    >Sign In</button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-500">
                    Don't have an account? <span className="text-amber-800 cursor-pointer hover:underline">Register</span>
                </p>
            </div>
        </div>
    );
};

export default Login;