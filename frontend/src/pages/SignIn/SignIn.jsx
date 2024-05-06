import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './signIn.scss';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      // регистрация
      console.log('Registering user:', username, password);
      // отправка запроса на регистрацию на сервер
    } else {
      // вход в систему
      console.log('Logging in user:', username, password);
      // отправка запроса на вход в систему на сервер
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
              <h1>{isRegister ? 'Sign Up' : 'Sign In'}</h1>
              <input type="email" placeholder="E-mail" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className="loginButton">{isRegister ? 'Sign Up' : 'Sign In'}</button>
              <span>
                {isRegister ? 'Already have an account? ' : 'New to Artkino? '}
                <b onClick={() => setIsRegister(!isRegister)}>{isRegister ? 'Sign In' : 'Sign Up'}</b>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;