
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import  NavbarAll  from "./components/navbar/NavbarAll";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import NotFound from "./pages/notfound/NotFound";
import About from "./pages/about/About";

function App() {

   
      //! burada navbar ve footer demirbaş olmalı, Home, About, Details sayfaları Route etiketleri ile Routes içinde belirlenmeli 
   
  return (
    <div>
      <Router>
       <NavbarAll/>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/countries/:namee" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
