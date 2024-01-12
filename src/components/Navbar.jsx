import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user , logOut } = UserAuth(); // Access the user from AuthContext

  console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-blue-600 text-4xl font-bold cursor-pointer'>MOVIEVERSE</h1>
      </Link>
      {user?.email ?
        <div>
          <Link to= '/account'><button className='text-white pr-4 mr-3 hover:text-blue-800 font-bold'>Account</button></Link>
          <button onClick={handleLogout} className='bg-blue-600 px-5 py-2 rounded cursor-pointer font-bold'>Log Out</button>
        </div> :
        <div>
          <Link to='/login'><button className='text-white pr-4 mr-3 hover:text-blue-800 font-bold'>Sign In</button></Link>
          <Link to='/signup'><button className='bg-blue-600 px-5 py-2 rounded cursor-pointer font-bold'>Sign Up</button></Link>
        </div>}
    </div>
  );
}

export default Navbar;
