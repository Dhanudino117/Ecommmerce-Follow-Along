import React,{useState} from 'react'
import '../App.css'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import axios from 'axios'

function login() {
  const {register,handleSubmit,formState:{errors},reset} = useForm();
  const [error, setError] = useState(""); 
  const [submit,setSubmit] = useState(false);
 
  
  const doneSubmit = async(data)=>{
    console.log(data)
    setSubmit(true);
    reset()
    
    try {
      // Make the POST request to the backend (replace with your actual API endpoint)
      const response = await axios.post("http://localhost:8000/api/v2/user/login", data);
      
      // Assuming response contains a token or user data on successful login
      console.log(response.data);
      localStorage.setItem("authToken", response.data.token);
      // Redirect or take some action upon successful login here
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      setError("There was an error logging in. Please check your credentials.");
      console.error("There was an error logging in!", error);
    
  };
  }


  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-200">
      
    <div className="max-w-lg  m-5 p-4 text-center bg-white rounded-lg shadow-2xl shadow-black  h-0.5 w-screen">
    <h1 className='text-blue-500 text-2xl pb-3 font-bold' >LOGIN</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit(doneSubmit)}>
        <input placeholder="Email" className='p-3 border-2 rounded-md' {...register("email",{required:"Email is required"})}/>
        {errors.email && <span className='flex justify-start pl-3 text-red-500'>{errors.email.message}</span>}

        <input placeholder="Password" type="password" className='p-3 border-2 rounded-md' {...register("password",{required:"Password is required"})}/>
        {errors.password && <span className='flex justify-start pl-3 text-red-500'>{errors.password.message}</span>}
        
        <div className='flex gap-2 pl-1'>
        <input type='checkbox' className='ml-2'/>
        <p className='text-gray-700'>Remember me</p>
        </div>

        
        <div className='flex justify-end'>
        <a href='#' className='p-1 text-sm  hover:underline text-blue-600'>Forgot password?</a>
        </div>
        <button className='p-2 bg-gradient-to-r from-blue-500 to-indigo-600 h-50 rounded-md hover:bg-blue-600 text-white' type='submit'>LOGIN</button>

      <div className='flex items-center justify-center gap-2'>
        <span className="text-sm text-gray-600">Don't have an account?</span>
      <Link to="/signup" className="text-blue-600 hover:underline text-sm">
        Sign up
      </Link>
      </div>
      </form>
    </div>
  </div>
    
  )
}

export default login
