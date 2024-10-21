import React from "react";
import {
  Row,
  Container,
  ButtonGroup,
  Button,
  Col,
  Navbar,
} from "react-bootstrap";

const ButtonsListAdmin = ({ onViewChange }) => (
  <Navbar sticky="top">
    <Container className="justify-content-center align-items-center" fluid>
      <Row>
        <Col xs={4} md={4} className="  mb-2 mb-md-0 ">
          <ButtonGroup>
            <Button
              variant="outline-secondary"
              className="NavbarButtons btn-lg"
              onClick={() => onViewChange("noticiasAdmin")}>
              Noticias
            </Button>
            <Button
              variant="outline-secondary"
              className="NavbarButtons btn-lg"
              onClick={() => onViewChange("contactosAdmin")}>
              Contactos
            </Button>
            <Button
              variant="outline-secondary"
              className="NavbarButtons btn-lg">
              crear
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default ButtonsListAdmin;
