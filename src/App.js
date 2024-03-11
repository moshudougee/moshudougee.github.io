import React, { useState, useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import ArrowDown from './assets/arrow-down.svg'
//import BackgroundAnimation from './layout/BackgroundAnimation';
import './App.css';


const App = () => {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.scrollY > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className='m-auto relative'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} alt='Arrow Down' />
          </button>
        )
      }
    </div>
  )
}

export default App
