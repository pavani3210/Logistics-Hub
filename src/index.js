// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Billing from "./components/Billing";
import Shipping from "./components/Shipping";
import ReportWebVitals from "./components/ReportWebVitals";
import LoginSignUp from './components/LoginSignUp';
import Homepage from './components/Homepage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="billing" element={<Billing />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path = "reports" element={<ReportWebVitals />} />
        <Route path="login" element={<LoginSignUp />} />
        <Route path="homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);