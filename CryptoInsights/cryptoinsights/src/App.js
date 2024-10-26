  import React from 'react';
  // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Hero from './components/Hero';
  import Featured from './components/Featured';
  import Homepage from './components/Homepage';
  import Footer from './components/Footer';
  import Signup from './pages/Signup';
  import Login from './pages/Login';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" exact>
            {/* <Hero />
            <Featured />
            <Homepage /> */}
          </Route>
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </Router>
    );
  }

  export default App;
