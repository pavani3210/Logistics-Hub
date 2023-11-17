import React,{useState} from 'react'
import '../css/LoginSignUp.css'
import user_icon from "../content/user.png"
import email_icon from '../content/mail.png'
import password_icon from '../content/password.png'
import Homepage from './Homepage'
import { useNavigate } from 'react-router-dom';
import HomePageNav from './HomePageNav';
import Navbar from './Navbar';

const LoginSignUp = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Logic for props.login (e.g., authentic  
    // Simulate authentication (replace with your own logic)
    if (username === 'user' && password === 'password') {
      // Successful props.login, navigate to the homepage
      navigate('/orders');
      props.setLogin(true);
    } else if(username === 'shivdeep' && password === 'root'){
        navigate('/orders');
        props.setLogin(true);
    }else {
      // Failed props.login, show an error message
      alert('Invalid credentials');
    }
  }

  const handleButtonSignup = () => {
    navigate('/signup');
  }
  const[action,setAction]=useState("Login");
  return (
    <>
      {
        props.login ? 
        <Navbar/> 
        : 
        <HomePageNav/> 
      }
      <div className='login-container'>
          <div className='header'>
              <div className='text'>{action}</div>
          </div>
          <div className='inputs'>
              <div className="input">
                  <img class="logo-container" src={email_icon} alt=""/>
                  <input type="email" placeholder='Email Id' value={username}
            onChange={handleUsernameChange}/>
              </div>
          </div>
          <div className='inputs'>
              <div className="input">
                  <img class="logo-container" src={password_icon} alt=""/>
                  <input type="password" placeholder='Password' value={password}
            onChange={handlePasswordChange}/>
              </div>
          </div>
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
          
          <div className='submit-container'>
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleButtonSignup}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleButtonClick}>Login</div>

          </div>
      </div>
    </>
  )
}

  
export default LoginSignUp
