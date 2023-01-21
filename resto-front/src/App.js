import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthService from './services/AuthService';

import Dishes from './components/DishComponent';
import Login from './components/SigninComponent';
import Register from './components/SignupComponent';
import Home from './components/HomeComponent';
import Profil from './components/ProfilComponent';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }


  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <Link to={"/"} className='navbar-brand'>Resto</Link>
        <div className='navbar-nav mr-auto'>
          <li>
            {currentUser ? (
              <div className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to={"/profil"}>
                     {currentUser.username}
                  </Link>
                </li>
                <li className='nav-item'>
                  <a href="/login" className='nav-link' onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to={"/login"} className="nav-linkg">
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
              )
            }
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/profil' element={<Profil/>} />
          <Route path="/dishes" element={<Dishes/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
