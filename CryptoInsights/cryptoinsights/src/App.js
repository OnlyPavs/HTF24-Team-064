import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'

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