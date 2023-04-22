import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import "./Navbar.css"

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='nav'>
      <h1 className='text-center text-2xl font-bold'>
       Counter-X
      </h1>
      {user?.displayName ? (
        <button  onClick={handleSignOut}>Logout</button>
      ) : (
        <Link className='nav-button' to='/signin'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;
