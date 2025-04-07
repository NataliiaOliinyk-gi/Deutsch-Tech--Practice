

import LanguageProvider from '../../context/LanguageProvider'

import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'
import Footer from '../Footer/Footer'

import './App.css'

function App() {

  // const [language, setLanguage] = useState('en');

  // const toogleLanguage = () => {
  //   setLanguage(prevLanguage => (prevLanguage === "en" ? "ru" : "en"))
  // }


  return (
    <>
      <LanguageProvider>
        <Header />
        <MainContent />
        <Footer />
      </LanguageProvider>

    </>
  )
}

export default App
