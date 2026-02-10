import './App.css'
import ScrollToTop from './components/ScrollToTop'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
      <ScrollToTop />
    </>
  )
}

export default App
