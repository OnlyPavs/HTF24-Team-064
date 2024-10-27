import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password1: '',
    password2: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (formData.password1 !== formData.password2) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password1 // Only send one password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Check if the error message is available
        throw new Error(data.message || "Registration failed");
      }

      // Registration was successful
      setSuccessMessage(data.message || "Registration successful!");
      setError(''); // Clear any previous error
      localStorage.setItem('user', JSON.stringify({ username: formData.username }));
      // Optionally redirect or reset the form here
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || "An error occurred during registration");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <input 
        type="text" 
        name="username" 
        onChange={handleChange} 
        placeholder="Username" 
        required 
      />
      <input 
        type="password" 
        name="password1" 
        onChange={handleChange} 
        placeholder="Password" 
        required 
      />
      <input 
        type="password" 
        name="password2" 
        onChange={handleChange} 
        placeholder="Re-enter Password" 
        required 
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
