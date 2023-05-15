import { Container, Image, Spinner } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DetalleProducto from "../components/DetalleProducto";
import productos from "../productos";

const Producto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const producto = productos.filter((item) => item.id === id);
    if (producto.length > 0) {
      setDetails(producto[0]);
      setLoading(false);
    }
    // else {
    //   navigate("/");
    // }
  }, [id]);
  console.log({ id });
  console.log({ productos });

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <section>
          <DetalleProducto producto={details} />
        </section>
      )}
    </Container>
  );
};

export default Producto;
