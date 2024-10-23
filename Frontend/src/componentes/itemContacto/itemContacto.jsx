import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { readContact } from "../../redux/reducers/contactSlice";
import { text } from "@fortawesome/fontawesome-svg-core";

const ItemContacto = ({ userProp }) => {
  const allContacts = useSelector((state) => state.contactos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editContactid, seteditContactid] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [puesto, setPuesto] = useState("");
  const Dispatch = useDispatch();
  const handleClickEditContact = (contacto) => {
    console.log("pasamos los datos");

    seteditContactid(contacto.id);
    setName(contacto.name);
    setEmail(contacto.email);
    setPhone(contacto.setPhone);
    setCourse(contacto.carrera);
    setPuesto(contacto.puesto);
  };
  const handleUpdateContact = () => {
    console.log("tenemos que actualizar");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/contactosEstudiantes/")
      .then((res) => {
        Dispatch(readContact(res.data));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [Dispatch]);

  const handleClickEditContaco = (contacto) => {};
  if (loading) {
    return <div className="alert alert-info">Cargando contactos...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error {error} </div>;
  }

  return (
    <>
      <Row className="w-100 d-flex align-items-center justify-content-center">
        {/* aqui tendria que ir el map */}
        {allContacts.data.data.map((contacto) => (
          <Card className="p-4 my-1 tarjeta-noticia" key={contacto.id}>
            {editContactid == !contacto.id ? (
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
                    <h5 className="text-muted">{contacto.carrera}</h5>
                  </div>
                  <Card.Text
                    className="mb-0 text-muted"
                    style={{ fontSize: "1rem", color: "#333" }}>
                    Nombre: {contacto.name}
                  </Card.Text>
                  <Card.Text
                    className="mb-1 text-muted"
                    style={{ fontSize: "1rem", color: "#333" }}>
                    Puesto: {contacto.puesto}
                  </Card.Text>
                  <Card.Text
                    className="mb-1 text-muted"
                    style={{ fontSize: "1rem", color: "#333" }}>
                    Email: {contacto.email}
                  </Card.Text>
                  <Card.Text
                    className="mb-1 text-muted"
                    style={{ fontSize: "1rem", color: "#333" }}>
                    Tel: {contacto.phone}
                  </Card.Text>
                  {userProp === "admin" && (
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="secondary"
                        className="btn-md"
                        onClick={() => handleClickEditContact(contacto)}>
                        Editar
                      </Button>
                    </div>
                  )}
                </Col>
              </Row>
            ) : (
              <Form>
                <Row>
                  <Col
                    xs={12}
                    md={6}
                    className="d-flex justify-content-center align-items-center text-center mb-3">
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
                        onChange={(e) => setName((e) => e.target.value)}
                        placeholder="Nombre Contacto"
                      />
                    </Form.Group>
                    <Form.Group controlId="formCategory" className="mb-3">
                      <Form.Label>Puesto</Form.Label>
                      <Form.Control
                        type="text"
                        value={puesto}
                        onChange={(e) => setPuesto((e) => e.target.value)}
                        placeholder="Puesto que Desempeña"
                      />
                    </Form.Group>
                    <Form.Group controlId="formDate">
                      <Form.Label>Correo Electronico</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) =>
                          setEmail((e) => setEmail(e.target.value))
                        }
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
                    <Button
                      variant="secondary"
                      className="me-2"
                      onClick={() => seteditContactid(0)}>
                      Cancelar
                    </Button>
                    <Button variant="dark" onClick={handleUpdateContact}>
                      Guardar Editar
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Card>
        ))}
      </Row>
    </>
  );
};

export default ItemContacto;
