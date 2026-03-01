import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewLandingPage from './pages/NewLandingPage'
import NewWorkPage from './pages/NewWorkPage'
import ProjectPage from './pages/ProjectPage'
import NewAboutPage from './pages/NewAboutPage'
import NewContactPage from './pages/NewContactPage'
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
              <Route path="/" element={<NewLandingPage />} />
              <Route path="/work" element={<NewWorkPage />} />
              <Route path="/work/:projectId" element={<ProjectPage />} />
              <Route path="/about" element={<NewAboutPage />} />
              <Route path="/contact" element={<NewContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
