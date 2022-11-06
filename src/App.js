import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar_NotAuthed from "./layout/Navbar"
import "./App.css"
import Footer from "./layout/Footer"
import About from "./pages/about/About"
import Request_Help from "./pages/request/Request_Help"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar_NotAuthed />
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/request" element={<Request_Help />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
