import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Context from "./Context";
import { useState } from "react";
import ListaProductos from "./views/ListaProductos";
import Producto from "./views/Producto";
import Login from "./views/Login";
import Navigation from "./components/navbar-components/NavBar";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./views/Footer";
import AgregarProducto from "./views/AgregarProducto";
import Register from "./views/Registro";
import Contacto from "./views/Contacto";
import About from "./views/About";

function App() {
  const [usuario, setUsuario] = useState(null);
  return (
    <Context.Provider value={{ usuario, setUsuario }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/productos/:id" element={<Producto />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/favoritos/:id_usuario" element={<ListaProductos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nuevo" element={<AgregarProducto />} />
          {/* <Route path="/usuario/:id_usuario" element={< />} /> */}

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
