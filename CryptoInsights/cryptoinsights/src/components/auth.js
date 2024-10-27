import React from 'react';
import Signup from '../pages/Signup'; // Adjust the import based on your file structure
import Login from '../pages/Login'; // Adjust the import based on your file structure
import './AuthPage.css'; // Import your CSS file

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="form-container">
        <Signup />
      </div>
      <div className="separator" />
      <div className="form-container">
        <Login />
      </div>
    </div>
  );
};

export default AuthPage;
