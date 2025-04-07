

import TempProvider from '../../contextProvader'

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
      <TempProvider>
        <Header />
        <MainContent />
        <Footer />
      </TempProvider>

    </>
  )
}

export default App
