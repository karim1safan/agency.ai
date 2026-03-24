import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Companies from './components/Companies';
import Services from './components/Services';
import Works from './components/Works';
function App() {

  const [theme, setTheme] = useState("light");

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Companies />
      <Services />
      <Works />
    </div>
  );
}

export default App