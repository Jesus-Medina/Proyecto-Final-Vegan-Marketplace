import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartLight } from "@fortawesome/free-regular-svg-icons";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function DetalleProducto({ producto }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [favorito, setFavorito] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const token = localStorage.getItem("token");

  const favoritear = async () => {
    if (!token) navigate("/login");
    const urlServer = "http://localhost:4000";
    const endpoint = "/favoritos";
    const body = {
      id_producto: producto.id,
    };
    try {
      const { data: favoritos } = favorito
        ? await axios.post(urlServer + endpoint, body, {
            headers: { Authorization: "Bearer " + token },
          })
        : await axios.delete(urlServer + endpoint, body, {
            headers: { Authorization: "Bearer " + token },
          });
      setFavoritos(favoritos);
    } catch (error) {
      console.log(error);
    }
  };

  const esFavorito = () => {
    return (
      token && favoritos.filter((item) => item.id === producto.id).length > 0
    );
  };

  useEffect(() => {
    const obtenerFavoritos = async () => {
      try {
        const urlServer = "http://localhost:4000";
        const endpoint = "/favoritos";

        const { data: favoritos } = await axios.get(urlServer + endpoint, {
          headers: { Authorization: "Bearer " + token },
        });
        setFavoritos(favoritos);
      } catch (error) {
        console.log({ error });
      }
    };
    if (token) {
      obtenerFavoritos();
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    setFavorito(esFavorito());
  }, [favoritos]);

  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <Card className="detalle" style={{ margin: "2% 5%" }}>
          <div className="detalle-img">
            <Card.Img variant="top" src={producto.url_imagen} />
          </div>
          <Card.Body>
            <div className="product-detalle-info">
              <Card.Title>{producto.nombre}</Card.Title>
              <p className="price">{producto.precio.toLocaleString("de")}</p>
            </div>
            <div className="product-descripcion">
              <p>Descripción</p>
              <hr style={{ borderColor: "black" }} />
              <p>{producto.descripcion}</p>
            </div>
            <div className="actions">
              <Button
                variant="success"
                className="agregar"
                //  onClick={handleAddToCart}
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </Button>
              <Button
                variant="success"
                className="favoritear"
                onClick={favoritear}
              >
                {favorito ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <FontAwesomeIcon icon={faHeartLight} />
                )}
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default DetalleProducto;
