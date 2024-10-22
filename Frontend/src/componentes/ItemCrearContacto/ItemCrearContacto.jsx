import React from "react";
import { Card, Row, Col, Form, Button, CardImg } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemCrearContacto.css";

const ItemCrearContacto = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Card className="p-4 my-4 tarjeta-contacto">
        <Form>
          <Row>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center align-items-center">
              <Row>
                <CardImg
                  src="/icono-agregar-imagen.png"
                  onClick={() => {
                    console.log("click en imagen hacer algo como");
                  }}
                />
              </Row>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Nombre Contacto</Form.Label>
                <Form.Control type="text" placeholder="Nombre Contacto" />
              </Form.Group>
              <Form.Group controlId="formStatus" className="mb-3">
                <Form.Label>Estado</Form.Label>
                <Form.Select>
                  <option>Seleccionar...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formCategory" className="mb-3">
                <Form.Label>Puesto</Form.Label>
                <Form.Control type="text" placeholder="Puesto que Desempeña" />
              </Form.Group>
            </Col>
          </Row>

          <Col xs={12} md={12}>
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formDate">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Correo Electronico "
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formCareer">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="email" placeholder="Telefono" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Row className="mt-2">
            <Col className="d-flex justify-content-end">
              {/* Botones de Cancelar y Actualizar */}
              <Button variant="secondary" className="me-2">
                Cancelar
              </Button>
              <Button variant="dark">Guardar</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Row>
  );
};

export default ItemCrearContacto;
