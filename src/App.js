import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import "bootstrap/dist/css/bootstrap.min.css"
import AHNavbar from "./layout/Navbar"
import "./App.css"
import Footer from "./layout/Footer"
import About from "./pages/about/About"
import Request_Help from "./pages/request/Request_Help"
import Login from "./pages/authentication/Login"
import Register from "./pages/authentication/Register"
import Missing from "./pages/Missing"
import Find_Hero from "./pages/find_hero/Find_Hero"
import Tutor_Register from "./pages/tutor/Tutor_Register"
import Dashboard from "./pages/dashboard/Dashboard"
import ForgotPassword from "./pages/authentication/ForgotPassword"

function App() {
  return (
    <div className="App">
      <Router>
        <AHNavbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/request" element={<Request_Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/find" element={<Find_Hero />} />
            <Route path="/tutor_sign_up" element={<Tutor_Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
