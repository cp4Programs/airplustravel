import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Promotions from './pages/promotions/Promotions'
import Booking from './pages/booking/Booking'
import About from './pages/about/About'
import Resources from './pages/resources/Resources'
import Destinations from './pages/destinations/Destinations';
import Auth from './pages/auth/Auth';
import TourDetails from './pages/tourDetails/TourDetails'

function App() {

  const navCategories = ["Home", "Destinations", "Booking", "Promotions", "About", "Resources"]

  return (
    <BrowserRouter>
      <Header navCategories={navCategories} />
      <Routes>
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Promotions" element={<Promotions />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/tourDetails/:tourId" element={<TourDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
