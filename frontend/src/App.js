import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


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

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/registro" element={<Register />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nuevo" element={<AgregarProducto />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
