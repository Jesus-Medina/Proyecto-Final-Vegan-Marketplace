import { Container, Image, Spinner } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DetalleProducto from "../components/detalleProductos-components/DetalleProducto";
import productos from "../productos";
import "../styles/productDetails.css"

const Producto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const producto = productos.filter((item) => item.id == id);
    if (producto.length > 0) {
      setDetails(producto[0]);
      setLoading(false);
    }
    // else {
    //   navigate("/");
    // }
    console.log(producto)
  }, [id]);
  console.log(details)

  return (
    <div className="detalle-producto-container">
      <Container>
        {loading ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <section>
            <DetalleProducto producto={details} />
          </section>
        )}
      </Container>
    </div>

  );
};

export default Producto;
