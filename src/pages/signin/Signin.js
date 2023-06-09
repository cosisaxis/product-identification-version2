import React, { useEffect, useState } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import "./Sign.css"

const Signin = () => {

 

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in with your google account</h1>
      <div className='google-container'>
      <div className='google-sign'>
        <GoogleButton className='google-btn' onClick={handleGoogleSignIn} />
      </div>
      </div>
    </div>
  );
};

export default Signin;
