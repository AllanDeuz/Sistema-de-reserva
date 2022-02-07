import React from "react";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Productos from "./components/productos/Productos";
import Nosotros from "./components/nosotros/Nosotros";
import Inicio from "./components/inicio/Inicio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      
      <Router>

        <Navbar/>

        <Routes>

          <Route path="/nosotros" element={<Nosotros/>}/>

          <Route path="/productos" element={<Productos/>}/>

          <Route path="/" element={<Inicio/>}/>

        </Routes>
        
      </Router>

      <Footer/>

    </div>
  );
}

export default App;
