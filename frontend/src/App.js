import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListaProductos from "./views/ListaProductos";
import Producto from "./views/Producto";
import BasicExample from "./components/NavBar";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <BasicExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/productos/:id" element={<Producto />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
