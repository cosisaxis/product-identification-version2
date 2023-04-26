import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Protected from './components/Protected';
import Footer from './components/footer/Footer';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/account/Account';
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
