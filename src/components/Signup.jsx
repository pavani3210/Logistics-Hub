import React,{useState} from 'react'
import '../css/LoginSignUp.css'
import user_icon from "../content/user.png"
import email_icon from '../content/mail.png'
import password_icon from '../content/password.png'
import Homepage from './Homepage'
import { useNavigate } from 'react-router-dom';
import HomePageNav from './HomePageNav';
import Navbar from './Navbar';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usertype,SetUsertype]=useState('');
  const [signup,setSignup]=useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => { 
    setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleUsertype = (e) => {
        SetUsertype(e.target.value);
    };

  const handleButtonClick = () => {
    // Logic for login (e.g., authentic  
    // Simulate authentication (replace with your own logic)
    if (username !=  '' && password != '' && usertype != '') {
      navigate('/orders');
      alert('Signup Successful')
      setSignup(true);
    }else {
      // Failed login, show an error message
      alert(' Please fill all the details');
    }
  }

  const handleButtonLogin = () => {
    navigate('/login');
  }

  const[action,setAction]=useState("Signup");
  return (
    <>
      {
        signup ? 
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
                  <input type="email" placeholder='Email Id' value={username}  onChange={handleUsernameChange}/>
              </div>
          </div>
          <div className='inputs'>
              <div className="input">
                  <img class="logo-container" src={password_icon} alt=""/>
                  <input type="password" placeholder='Password' value={password} onChange={handlePassword}/>
              </div>
          </div>
          <div className='inputs'>
              <div className="input">
                  <img class="logo-container" src={password_icon} alt=""/>
                  <input type="UserType" placeholder='usertype' value={usertype} onChange={handleUsertype}/>
              </div>
          </div>
          
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
          
          <div className='submit-container'>
          <div className={action === "Signup" ? "submit gray" : "submit"} onClick={handleButtonClick}>Sign Up</div>
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleButtonLogin}>Login</div>

          </div>
      </div>
    </>
  )
}

  
export default Signup
