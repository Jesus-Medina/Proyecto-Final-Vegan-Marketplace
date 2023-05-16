import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductoCard({ producto }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "20rem" }}>
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${producto.url_imagen})`,
          backgroundSize: "cover",
        }}
        onClick={() => navigate(`/productos/${producto.id}`)}
      ></div>
      <div className="product-card-info">
        <Card.Body>
          <Card.Title onClick={() => navigate(`/productos/${producto.id}`)}>
            {producto.nombre}
          </Card.Title>
          <p className="price">{producto.precio.toLocaleString("de")}</p>
        </Card.Body>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="success"
            className="agregar"
            //  onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProductoCard;
