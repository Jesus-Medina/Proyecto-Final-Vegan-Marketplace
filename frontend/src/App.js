import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import ListaProductos from "./views/ListaProductos";
import Producto from "./views/Producto";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/login" element={<Login />}/>

        <Route path="*" element={<ListaProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
