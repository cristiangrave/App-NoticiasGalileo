import React from "react";
import { ButtonGroup, Button, Col } from "react-bootstrap";

const ButtonsList = ({ onViewChange }) => (
  <Col xs={4} md={4} className="d-flex justify-content-center mb-2 mb-md-0 ">
    <ButtonGroup>
      <Button
        variant="outline-secondary"
        className="NavbarButtons btn-lg"
        onClick={() => onViewChange("noticias")}>
        Noticias
      </Button>
      <Button
        variant="outline-secondary"
        className="NavbarButtons btn-lg"
        onClick={() => onViewChange("contactos")}>
        Contactos
      </Button>
    </ButtonGroup>
  </Col>
);

export default ButtonsList;
