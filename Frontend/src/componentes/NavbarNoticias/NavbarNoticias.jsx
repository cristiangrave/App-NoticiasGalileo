import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarNoticias.css";
import CustomUser from "../customUser/CustomUser";

const NavbarNoticiasContacto = () => (
  <Navbar bg="white" expand="lg" className="shadow-sm py-1  " sticky="top">
    <Container fluid>
      <Row className="d-flex w-100 align-items-center">
        <Col
          xs={6}
          md={6}
          className="d-flex justify-content-start mb-2 mb-md-0">
          <Navbar.Brand href="#">
            <img
              src="/logo-noslogan.png"
              alt="Logo universidad galileo"
              style={{ maxHeight: "70px" }}
            />
          </Navbar.Brand>
        </Col>
        <Col xs={6} md={6} className="d-flex justify-content-end mb-2 mb-md-0 ">
          <CustomUser />
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default NavbarNoticiasContacto;

