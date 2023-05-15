import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";

const AgregarProducto = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    url_imagen: "",
    precio: 0,
    stock: 1,
  });

  useEffect(() => {}, []);

  const handleChange = (event) => {
    const valor = event.target.value;
    setProducto({ ...producto, [event.target.name]: valor });
    console.log(producto);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Nombre producto"
            onChange={handleChange}
            value={producto.nombre}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            name="descripcion"
            as="textarea"
            placeholder="Descripción del producto"
            style={{ height: "100px" }}
            value={producto.descripcion}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            name="url_imagen"
            type="text"
            placeholder="URL de una imagen del producto"
            onChange={handleChange}
            value={producto.url_imagen}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            name="precio"
            type="number"
            min={0}
            onChange={handleChange}
            value={producto.precio}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            name="stock"
            type="number"
            min={1}
            onChange={handleChange}
            value={producto.stock}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;

// {
//     id: 65,
//     id_vendedor: 3,
//     nombre: "tostadas",
//     descripcion: "descripcion podutto",
//     url_imagen:
//       "https://cdn.shopify.com/s/files/1/1055/2210/articles/bright_colored_foods-808927.jpg?v=1674614608",
//     precio: 9990,
//     stock: 10,
//     categoria: "categoria prod 2",
//   },
