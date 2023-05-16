import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductoCard from "../components/producto-components/ProductoCard";
import productos from "../productos";

const ListaProductos = () => {
  //   const [productosA, setProductos] = useState([]);

  //   useEffect(() => {
  //     setProductos(productos);
  //   }, []);

  return (
    <Container>
      <section className="lista-productos">
        {productos &&
          productos.map((producto) => {
            return <ProductoCard key={producto.id} producto={producto} />;
          })}
      </section>
    </Container>
  );
};

export default ListaProductos;
