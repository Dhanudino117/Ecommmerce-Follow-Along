import React, { useState } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Don't forget to import axios

function Signup() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [submit, setSubmit] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);

  const doneSubmit = async(data) => {
    console.log(data);
    setSubmit(true);
    setPreviewPic(null)
    reset();

    // Prepare FormData with form data and image file
    const newForm = new FormData();
    newForm.append("file", avatar);  // Image file
    newForm.append("firstname", data.firstname);
    newForm.append("lastname", data.lastname);
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

  const password = watch("password");

  const handlePic = (e) => {
    const image = e.target.files[0];
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setPreviewPic(imageUrl);
      setAvatar(image)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-200">
      <div className="max-w-lg m-5 p-4 text-center bg-white rounded-lg shadow-2xl shadow-black">
        <h1 className='text-blue-500 text-2xl pb-3 font-bold'>SIGN UP</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(doneSubmit)}>

          <input
            placeholder='First Name'
            className='p-3 border-2 rounded-md'
            {...register('firstname', { required: "First Name is required" })}
          />
          {errors.firstname && <span className='flex justify-start rounded-md pl-2 text-red-500'>{errors.firstname.message}</span>}

          <input
            placeholder='Last Name'
            className='p-3 border-2 rounded-md'
            {...register('lastname', { required: "Last Name is required" })}
          />
          {errors.lastname && <span className='flex justify-start pl-2 rounded-md text-red-500'>{errors.lastname.message}</span>}

          <input
            placeholder="Email"
            className='p-3 border-2 rounded-md'
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid Email" },
            })}
          />
          {errors.email && <span className='flex justify-start pl-2 text-red-500'>{errors.email.message}</span>}

          <input
            type='password'
            placeholder="Password"
            className='p-3 border-2 rounded-md'
            {...register("password", {
              required: "Password is required",
              minLength: { value: 5, message: "Password must be more than 5 characters" },
              maxLength: { value: 20, message: "Password cannot exceed 20 characters" },
              pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{5,}$/, message: "Password must contain at least a digit, special character, an Upper Case, and a lower case character" }
            })}
          />
          {errors.password && <span className='flex justify-start pl-2 text-red-500'>{errors.password.message}</span>}

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 border-2 rounded-md"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <span className='flex justify-start pl-2 text-red-500'>{errors.confirmPassword.message}</span>}

          <label className='flex flex-start pl-3'>Upload Profile Picture</label>
          <input
            className="pl-3"
            {...register('image', { required: "Image is required" })}
            type='file'
            accept='image/*'
            onChange={handlePic}
          />
          {previewPic &&
            <span className='flex justify-center'>
              <img src={previewPic} alt="Profile" className='w-24 h-24 object-cover rounded-full' />
            </span>}

          <button type='submit' className='p-2 bg-gradient-to-r from-blue-500 to-indigo-600 h-50 rounded-md hover:bg-blue-600 text-white'>
            SIGN UP
          </button>

          <div className='flex items-center justify-center gap-2'>
            <span className="text-sm text-gray-600">Already have an account?</span>
            <Link to="/login" className="text-blue-500 hover:underline text-sm">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
