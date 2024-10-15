import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemContacto = ({ name, email, phone, carrera, puesto, imagen }) => (
  <Row className="w-100 d-flex align-items-center justify-content-center">
    <Card className="p-4 my-1 tarjeta-noticia">
      <Row className="g-0">
        <Col xs={12} md={6} className="order-md-1 order-2">
          <Card.Img
            src="/user.jpg"
            variant="top"
            alt="Imagen de noticia"
            className="rounded-3"
          />
        </Col>
        <Col xs={12} md={6} className="order-md-2 order-1 ps-2">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="text-muted">{carrera}</h5>
          </div>
          <Card.Text
            className="mb-0 text-muted"
            style={{ fontSize: "1rem", color: "#333" }}>
            Nombre:
            {name}
          </Card.Text>
          <Card.Text
            className="mb-1 text-muted"
            style={{ fontSize: "1rem", color: "#333" }}>
            Puesto:
            {puesto}
          </Card.Text>
          <Card.Text
            className="mb-1 text-muted"
            style={{ fontSize: "1rem", color: "#333" }}>
            Email:
            {email}
          </Card.Text>
          <Card.Text
            className="mb-1 text-muted"
            style={{ fontSize: "1rem", color: "#333" }}>
            Tel:
            {phone}
          </Card.Text>
        </Col>
      </Row>
    </Card>
  </Row>
);

export default ItemContacto;
