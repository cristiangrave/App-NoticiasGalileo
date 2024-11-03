import React from 'react';
import { Card, Row, Col, Form, Button, CardImg } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemEditarNoticia.css';

function ItemEditarNoticia() {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Card className="p-4 my-4 tarjeta-noticia">
        <Form>
          <Row className="mb-3">
            <Col xs={12} md={2} className="d-flex justify-content-center align-items-center">
              {/* Ícono de imagen */}
              <CardImg 
                src="/icono-agregar-imagen.png"
              
              />
            </Col>

            <Col xs={12} md={10}>
              <Row>
                <Col xs={12} md={6} className="mb-3">
                  {/* Campo de Título */}
                  <Form.Group controlId="formTitle">
                    <Form.Label>Título</Form.Label>
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
                    <Form.Control type="text" placeholder="06/09/2024" />
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
                <Form.Control as="textarea" rows={3} placeholder="Ingrese una Descripción" />
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

          <Row className="mt-3">
            <Col className="d-flex justify-content-end">
              {/* Botones de Cancelar y Actualizar */}
              <Button variant="light" className="me-2">Cancelar</Button>
              <Button variant="dark">Actualizar</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Row>
  );
}

export default ItemEditarNoticia;
