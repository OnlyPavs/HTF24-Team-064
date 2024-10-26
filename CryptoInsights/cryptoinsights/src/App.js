import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './auth/Signup';
import Login from './auth/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;