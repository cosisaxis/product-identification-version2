import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className='nav-icon' onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? 'nav-icon-line open' : 'nav-icon-line'}></div>
        <div className={isOpen ? 'nav-icon-line open' : 'nav-icon-line'}></div>
        <div className={isOpen ? 'nav-icon-line open' : 'nav-icon-line'}></div>
      </div>
        
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>Tutorial</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {user?.displayName ? (
          <li><button className='nav-logout' onClick={handleSignOut}>Logout</button></li>
        ) : (
          <li><Link className='nav-button' to='/signin'>Sign in</Link></li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
