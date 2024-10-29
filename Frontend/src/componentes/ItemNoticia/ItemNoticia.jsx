import React from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemNoticia.css";

const ItemNoticia = ({
  titulo,
  descripcion,
  carrera,
  imagen,
  fecha,
  usuarioProp,
}) => (
  <Row className="w-100 d-flex align-items-center justify-content-center">
    <Card className="p-4 my-1 tarjeta-noticia">
      <Row className="g-0">
        <Col xs={12} md={6} className="order-md-1 order-2 ">
          <Card.Img
            src="imagen-noticia.png" // AQUI VA LA IMAGEN AUN NO LA COLOCO ESTAMOS EN PRUEBAS
            variant="top"
            alt="Imagen de noticia"
            className="img-fluid rounded" /* Clase para hacer la imagen responsiva y con bordes redondeados */
          />
        </Col>
        <Col xs={12} md={6} className="order-md-2 order-1 ps-2">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-muted">{fecha}</small>
            <Badge className="p-2 badge-categoria">{titulo}</Badge>
          </div>
          <Card.Title className="mt-2 titulo-noticia">{carrera}</Card.Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Body>
            <Card.Text
              className="mt-0"
              style={{ fontSize: "1rem", color: "#333" }}>
              {descripcion}
            </Card.Text>
            <p className="text-muted " style={{ fontSize: "0.9rem" }}>
              {carrera}
            </p>
          </Card.Body>

          {usuarioProp === "admin" && (
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="btn-md">
                Editar
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Card>
  </Row>
);

export default ItemNoticia;
