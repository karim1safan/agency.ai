import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Companies from './components/Companies';
import Services from './components/Services';
import Works from './components/Works';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  const [theme, setTheme] = useState("light");

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Companies />
      <Services />
      <Works />
      <Teams />
      <Contact />
      <Footer theme={theme} />
    </div>
  );
}

export default App