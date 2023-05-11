import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DetalleProducto({ producto }) {
  return (
    <Card className="detalle" style={{ margin: "2% 5%" }}>
      <div className="detalle-img">
        <Card.Img variant="top" src={producto.url_imagen} />
      </div>
      <Card.Body>
        <div className="product-detalle-info">
          <Card.Title>{producto.nombre}</Card.Title>
          <p className="price">{producto.precio.toLocaleString("de")}</p>
          <div className="actions">
            <Button
              variant="warning"
              className="agregar"
              //  onClick={handleAddToCart}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </Button>
          </div>
        </div>
        <div className="product-descripcion">
          <p>Descripción</p>
          <hr />
          <p>{producto.descripcion}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DetalleProducto;
