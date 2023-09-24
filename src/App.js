import logo from './logo.svg';
import './App.css';
import Navbar from './widgets/Navbar/Navbar';
import HomePage from './widgets/Home/HomePage';
import Footer from './widgets/Footer/Footer';
import About from './widgets/About/About';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Projects from './widgets/Projects/Projects';
import Services from './widgets/Services/Services';
import Contact from './widgets/Contact/Contact';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
