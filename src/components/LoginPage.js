import {React, useState, useEffect} from 'react';
import { Redirect, Route } from "react-router-dom";
import HomePage from './HomePage';
import logo from "../logo.png";

const SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

const LoginPage = ({isAuth, setIsAuth}) => {
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const inputUser = (e) => {
    setUserName(e.target.value);
  }

  const inputPwd = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userName === user[0].user_id && password === user[0].user_pwd) {
      setError('');
      setIsAuth(true);
    } else {
      setError('Usernam or Password incorrect!');
    }
  }

  const ProtectedLogin = () => {
    if (isAuth !== true) {
      return <Route />;
    } else {
      return <Redirect to="/" />;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      let url = `${SERVER_URL}/user`;
      const res = await fetch(url);
      const data = await res.json();
      setUser(data);
    };
    fetchData();
  }, [isAuth]);

  return (
    <div id="form-search" className="form-search">
      <div className="container">
        <p className={`form-search__error ${error ? 'active' : ''}`}>{error ? error : ''}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-search__bnr">
            <img src={logo} alt="IT Viec" />
          </div>
          <div className="form-search__group">
            <label>Username</label>
            <input type="text" placeholder="Username" onChange={inputUser} />
          </div>
          <div className="form-search__group">
            <label>Password</label>
            <input type="password" placeholder="Password" onChange={inputPwd} />
          </div>
          <button type="submit">Sign In</button>
          <ProtectedLogin path="/login" render={<HomePage />} />
        </form>
      </div>
    </div>
  );
}

export default LoginPage
