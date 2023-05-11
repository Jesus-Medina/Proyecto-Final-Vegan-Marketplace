import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListaProductos from "./views/ListaProductos";
import Producto from "./views/Producto";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/productos/:id" element={<Producto />} />

        <Route path="*" element={<ListaProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
