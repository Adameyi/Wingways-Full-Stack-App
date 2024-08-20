import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Destinations from "./pages/Destinations"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import FlightsBooking from "./pages/FlightsBooking"
import SeatsDeparture from "./pages/SeatsDeparture"
import SeatsReturning from "./pages/SeatsReturning"
import Receipt from "./pages/Receipt"
import Payment from "./pages/Payment"

function Logout() {
  localStorage.clear() //Clear local storage there is no remaining old access tokens before register/login/logout.
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={
          //Dashboard component secured behind user login/register
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/about" element={<About />}></Route>
        <Route path="/destinations" element={<Destinations />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/register" element={<RegisterAndLogout />}></Route>
        <Route path="/flights-booking" element={<FlightsBooking />}></Route>
        <Route path="/seats-departure" element={<SeatsDeparture />}></Route>
        <Route path="/seats-returning" element={<SeatsReturning />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/receipt" element={<Receipt />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
