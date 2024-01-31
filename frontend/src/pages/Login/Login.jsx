import React from 'react';
import './index.scss';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', {
      username,
      password,
    })
    .then(res=>{
      if(res.data.success){
        navigate('/');
        localStorage.setItem('token',res.data.token);
      }
      else alert(res.data.message);
    })
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={(e)=>setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
