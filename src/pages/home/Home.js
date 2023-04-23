import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import "./Home.css"
import heroImage from '../../assets/image-hero.jpg'

const Home = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="hero-title">Premier blockchain counterfeit agency</h1>
        <p className="hero-subtitle">Our mission is to save brands from bad actors that try to destroy small young creatives</p>
        <div className='button-container'>
        {user?.displayName ? (
        <button className='nav-logout' onClick={handleSignOut}>Logout</button>
      ) : (
        <Link className='hero-button' to='/signin'>Sign in</Link>
      )}
      <button className='hero-button2'><a href='https://github.com/cosisaxis/Product-identifier'>Documentation</a></button>
      </div>
      </div>
      <img src={heroImage} alt="Hero Image" className="hero-image" />
    </div>

  )
}

export default Home