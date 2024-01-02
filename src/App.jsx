import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import './Home.css'
import Footer from './sections/Footer';

function App() {

  return (   
        <div className='container'>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<Page404/>}/>
          </Routes>
          <Footer/>
        </div>
  )
}

export default App
