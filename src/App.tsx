import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <main className="page-content">
        <Header />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
