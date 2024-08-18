import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signIn.scss';
import axios from 'axios';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let url;
        let response;

        if (isRegister) {
            url = "http://localhost:5500/api/users/register";
            response = await axios.post(url, { username, email, password });
        } else {
            url = "http://localhost:5500/api/auth/login";
            response = await axios.post(url, { email, password });
        }

        // Проверяем, есть ли токен в localStorage
        if (localStorage.getItem('token')) {
            setIsUserLoggedIn(true);
        }

        // После успешного запроса, сохраните токен в localStorage и перенаправьте
        localStorage.setItem('token', response.data.token);
        
        if (isRegister) {
            navigate("/profile"); // Если регистрация, перенаправляем на страницу профиля
        } else {
            navigate("/"); // Если вход, перенаправляем на главную страницу
        }

        console.log(response.data.message);
    } catch (error) {
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
            setError(error.response.data.message);
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
};

  return (
    <div className='signup_container'>
      <nav>
        <ul className="navbar">
          <Link to="/" className='logo'>ARTKINO</Link>
        </ul>
      </nav>
      <div className='page-container'>
        <div className="login">
          <div className="top">
            <div className="wrapper">
            </div>
          </div>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <h1>{isRegister ? 'Register' : 'Sign In'}</h1>

              {isRegister && (
                <input
                  type="text" // тип должен быть "text", а не "username"
                  placeholder="Username"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              )}

              <input 
                type="email"
                placeholder="E-mail"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)} />

              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)} />

              {/* Исправление отображения ошибки */}
              {error && <p className="error">{error}</p>}

              <button type="submit" className="loginButton">{isRegister ? 'Sign Up' : 'Sign In'}</button>
              <span>
                {isRegister ? 'Already have an account? ' : 'New to Artkino? '}
                <b onClick={() => setIsRegister(!isRegister)}>{isRegister ? 'Sign In' : 'Register'}</b>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
