import React, { useState } from "react";
import { Card, Row, Col, Form, Button, CardImg } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemCrearNoticia.css";

const ItemCrearNoticia = () => {
  /* se creo el estado de la fecha para que agarre la fecha actual  */
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Card className="p-4 my-4 tarjeta-noticia">
        <Form>
          <Row className="mb-3">
            <Col
              xs={12}
              md={2}
              className="d-flex justify-content-center align-items-center"
            >
              {/* Ícono de imagen */}
              <CardImg src="/icono-agregar-imagen.png" />
            </Col>
            <Col xs={12} md={10}>
              <Row>
                <Col xs={12} md={6} className="mb-3">
                  {/* Campo de Título */}
                  <Form.Group controlId="formTitle">
                    <Form.Label>Título Noticia</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un Título" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} className="mb-3">
                  {/* Campo de Estado */}
                  <Form.Group controlId="formStatus">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select>
                      <option>Seleccionar...</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} className="mb-3">
                  {/* Campo de Categoría */}
                  <Form.Group controlId="formCategory">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select>
                      <option>Seleccionar...</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} className="mb-3">
                  {/* Campo de Fecha de Publicación */}
                  <Form.Group controlId="formDate">
                    <Form.Label>Fecha Publicación</Form.Label>
                    <Form.Control
                      type="date"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xs={12} className="mb-3">
              {/* Campo de Descripción */}
              <Form.Group controlId="formDescription">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Ingrese una Descripción"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mb-3">
              {/* Campo de Carrera */}
              <Form.Group controlId="formCareer">
                <Form.Label>Carrera</Form.Label>
                <Form.Select>
                  <option>Seleccionar...</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

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

export default ItemCrearNoticia;
