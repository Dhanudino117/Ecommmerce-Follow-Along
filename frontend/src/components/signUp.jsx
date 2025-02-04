import { useForm} from 'react-hook-form';
import  { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function signUp() {

  const { register, handleSubmit, formState: { errors }, reset,watch } = useForm({
    defaultValues: {
      name: "",
      email:"",
      password: "",
      confirmPassword: ""
    }
  });
  
  const [avatar, setAvatar] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  

   

    // Prepare FormData with form data and image file
    const newForm = new FormData();
    newForm.append("file", avatar);  // Image file
    newForm.append("name", data.name);
    newForm.append("email", data.email);
    newForm.append("password", data.password);




    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "any",
      },
    };

 
    axios
    .post("http://localhost:8000/api/v2/user/create-user", newForm, config)
    .then((res) => {
      console.log(res.data); // Success response from server
    })
    .catch((err) => {
      console.error(err.response ? err.response.data : err.message); // Error handling
    });

};

const [previewImage, setPreviewImage] = useState(null);

 
const password = watch('password');

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file); // Create preview URL
    setPreviewImage(imageUrl);
    setAvatar(file)

  }
};




  return (
    <>
      <div className="signup-container flex items-center justify-center min-h-screen bg-gray-100">
        <div className="signupInbox w-full max-w-sm p-6 bg-white rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h1>

          
            <label>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <div className="text-red-500 text-xs">{errors.name.message}</div>}
            <br />

            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg"
              {...register("email", { required: "Email is required",
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email" }
               })}
            />
            {errors.email && <div className="text-red-500 text-xs">{errors.email.message}</div>}
            <br />

            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg"
              {...register("password", { required: "Password is required",
               minLength: { value: 4, message: "Password must be at least 8 characters"},
               maxLength: { value: 20, message: "Password must be at most 20 characters"},
               pattern:{ value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,  
                message:'Password must contain at least one uppercase, one lowercase letter, and one number,and a special character',}
               })}
            />
            {errors.password && <div className="text-red-500 text-xs">{errors.password.message}</div>}
            <br />

            <label > Confirm Password:
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
          )}

            <input
            type="file"
            id = "profilePic"
            accept = "image/*"
            className="mt-3 block w-full text-sm text-gray-500  file:border file:border-gray-300 file:text-xs file:font-medium file:bg-white file:rounded-md"
            onChange={handleFileChange}
            
            
            >
            </input>

            {previewImage && (
            <div className="mt-4">
              <p className="text-sm text-gray-700">Image Preview:</p>
              <img
                src={previewImage}
                alt="Profile Preview"
                className="w-24 h-24 object-cover rounded-full mt-2"
              />
            </div>
          )}

             
            <button
              type="submit"
              className="m-6 mx-0 w-full px-4 py-2 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600"
            >
              SignUp
            </button>
            <span className="ml-20 text-gray-700 text-xs">Already have an account?</span>
            &nbsp;<Link to="/login" className="text-blue-600 text-xs">LogIn</Link>
          </form>
        </div>
      </div>
    </>
  );

};


export default signUp;
