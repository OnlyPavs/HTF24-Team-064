import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
import AuthPage from './components/auth'; // Import the AuthPage component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Featured />
            <Homepage />
          </>
        } />
        <Route path="/auth" element={<AuthPage />} />
        
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
