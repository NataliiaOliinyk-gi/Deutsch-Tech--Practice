import { Routes, Route } from 'react-router-dom'

import Navigation from '../Navigation/Navigation'
import HomePage from '../../pages/HomePage/HomePage'
import AboutPage from '../../pages/AboutPage/AboutPage'
import ContactPage from '../../pages/ContactPage/ContactPage'
import SiteBanner from '../SiteBanner/SiteBanner'

import './App.css'


function App() {

  const begrüßungs = 'Hallo, ';
  const username = 'Anastasia'

  return (
    <>
      <SiteBanner text={begrüßungs} name={username} />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
