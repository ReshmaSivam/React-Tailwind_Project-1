import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonial from './Components/Testimonial'
import Contacts from './Components/Contacts'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
