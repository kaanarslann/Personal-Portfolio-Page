import './App.css'
import ScrollToTop from './components/ScrollToTop'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { OptionsContextProvider } from './context/OptionsContext'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <OptionsContextProvider>
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
      <ScrollToTop />
      <ToastContainer />
    </OptionsContextProvider>
  )
}

export default App
