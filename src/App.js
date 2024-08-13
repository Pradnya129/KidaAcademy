import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import Navmenu from './components/Navmenu/Navmenu';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Notfoundpage from './components/Notfoundpage';
import About from './components/Home/About';
import About_page from './components/About/AboutPage';
import Classes_page from './components/Classes/Classespage';
import Teacher_page from './components/Teachers/Teacher_page';
import Gallery_page from './components/Gallery/Gallerypage';
import Contact_page from './components/Contact/Contactpage';

function App() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);



  return (
    <>
     <BrowserRouter>
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_page/>} />
        <Route path="/classes" element={<Classes_page/>} />
        <Route path="/teachers" element={<Teacher_page/>} />
        <Route path="/gallery" element={<Gallery_page/>} />
        <Route path="/contact" element={<Contact_page/>} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}



export default App;
