import React, { useState } from "react";
import { Card, Row, Col, Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemCrearContacto.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/reducers/contactSlice";
import axios from "axios";
import Swal from "sweetalert2";

const ItemCrearContacto = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [puesto, setPuesto] = useState("");
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const handleCreateContact = () => {
    if (name && email && phone && course && puesto) {
      const dataContact = {
        name: name,
        email: email,
        phone: phone,
        carrera: course,
        puesto: puesto,
        imagen: "imagen.png",
      };
      axios
        .post("http://localhost:3001/contactosEstudiantes/", dataContact)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Contacto Guardado Correctamente",
          });
          dispatch(addContact(dataContact));
          setName("");
          setEmail("");
          setPhone("");
          setCourse("");
          setPuesto("");
        })
        .catch((error) => {
          Toast.fire({
            icon: "danger",
            title: "Error al Crear Contacto Nuevo : " + error,
          });
          console.error(error);
        });
    }
  };
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Card className="p-4 my-4 tarjeta-contacto">
        <Form>
          <Row>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center align-items-center text-center mb-3"
            >
              <Row className="justify-content-center align-items-center">
                <Image
                  src="/icono-agregar-imagen.png"
                  onClick={() => {
                    console.log("click en imagen hacer algo como");
                  }}
                  roundedCircle
                  rounded
                />
                <Form.Control type="file" size="sm" />
              </Row>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Nombre Contacto</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre Contacto"
                />
              </Form.Group>
              <Form.Group controlId="formCategory" className="mb-3">
                <Form.Label>Puesto</Form.Label>
                <Form.Control
                  type="text"
                  value={puesto}
                  onChange={(e) => setPuesto(e.target.value)}
                  placeholder="Puesto que Desempeña"
                />
              </Form.Group>
              <Form.Group controlId="formDate">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo Electronico "
                />
              </Form.Group>
              <Form.Group controlId="formDate">
                <Form.Label>Carrera</Form.Label>
                <Form.Control
                  type="email"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="Carrera"
                />
              </Form.Group>
            </Col>
          </Row>
          <Col xs={12} md={12}>
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formCareer">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="number  "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Group controlId="formStatus" className="mb-3">
                  <Form.Label>Estado</Form.Label>
                  <Form.Select>
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Row className="mt-2">
            <Col className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2">
                Cancelar
              </Button>
              <Button variant="dark" onClick={handleCreateContact}>
                Guardar
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Row>
  );
};

export default ItemCrearContacto;
