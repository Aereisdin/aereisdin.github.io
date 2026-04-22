import { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'
import './App.css'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

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
