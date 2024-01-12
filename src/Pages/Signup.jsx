import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const Signup = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const {user , signUp} = UserAuth();
  const Navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await signUp(email , password);
      Navigate('/')
    } catch (error){

    }
  };


  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[550px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col'>
                  <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email'/>
                  <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current password'/>
                  <button className='bg-blue-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                  <div className='flex justify-between items-center'>
                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-6 '><span className='text-gray-600 mr-2'>Already subscribed to Movieverse?</span><Link to='/login'>Sign Up</Link></p>
                </form>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Signup