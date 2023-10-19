import React,{useState} from 'react'
import '../css/LoginSignUp.css'
import user_icon from "../content/user.png"
import email_icon from '../content/mail.png'
import password_icon from '../content/password.png'
import Homepage from './Homepage'
//import { navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
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
    // Logic for login (e.g., authentication)
  
  
    // Simulate authentication (replace with your own logic)
    if (username === 'user' && password === 'password') {
      // Successful login, navigate to the homepage
      navigate('/homepage');
    } else if(username === 'shivdeep' && password === 'root'){
        navigate('/homepage');
    }else {
      // Failed login, show an error message
      alert('Invalid credentials');
    }
  }
    const[action,setAction]=useState("Login");
   // const navigate = useNavigate();
  return (
    
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            
                {action==="Login"?<div></div>:<div className="input">
                <img class="logo-container" src={user_icon} alt=""/>
                <input type="text" placeholder='Name'  />
            </div>}
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
  )
}

  
export default LoginSignUp
