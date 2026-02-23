import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import WorkPage from './pages/WorkPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/ui/navbar'
import Footer from './components/ui/footer'
import { ThemeProvider } from './lib/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:projectId" element={<ProjectPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
