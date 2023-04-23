import React from 'react'
import "./Home.css"
import heroImage from '../../assets/image-hero.jpg'

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="hero-title">Premier blockchain counterfeit agency</h1>
        <p className="hero-subtitle">Our mission is to save brands from bad actors that try to destroy small young creatives</p>
      </div>
      <img src={heroImage} alt="Hero Image" className="hero-image" />
    </div>

  )
}

export default Home