import React,{useState} from 'react'
import '../css/LoginSignUp.css'
import user_icon from "../content/user.png"
import email_icon from '../content/mail.png'
import password_icon from '../content/password.png'
import Homepage from './Homepage'
import { useNavigate } from 'react-router-dom';
import HomePageNav from './HomePageNav';
import Navbar from './Navbar';

const LoginSignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Logic for login (e.g., authentic  
    // Simulate authentication (replace with your own logic)
    if (username === 'user' && password === 'password') {
      // Successful login, navigate to the homepage
      navigate('/orders');
      setLogin(true);
    } else if(username === 'shivdeep' && password === 'root'){
        navigate('/orders');
        setLogin(true);
    }else {
      // Failed login, show an error message
      alert('Invalid credentials');
    }
  }
  const[action,setAction]=useState("Login");
  return (
    <>
      {
        login ? 
        <Navbar/> 
        : 
        <HomePageNav/> 
      }
      <div className='container'>
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
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleButtonClick}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleButtonClick}>Login</div>

          </div>
      </div>
    </>
  )
}

  
export default LoginSignUp
