import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { readContact, updateContact } from "../../redux/reducers/contactSlice";
import Swal from "sweetalert2";

const ItemContacto = ({ userProp }) => {
  const allContacts = useSelector((state) => state.contactos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editContact, setEditedProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/contactosEstudiantes/")
      .then((res) => {
        dispatch(readContact(res.data.data));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [dispatch]);
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
  const handleClickEditContaco = () => {
    axios
      .put(`http://localhost:3001/contactosEstudiantes/${editContact.id}`, {
        name: editContact.name,
        email: editContact.email,
        phone: editContact.phone,
        carrera: editContact.carrera,
        puesto: editContact.puesto,
      })
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Contacto Editado Correctamente",
        });
        /* IMPORTATE RECORDAR QUE AL OTRO LADOR RECIBIMOS UN OBJETE CON EL MISMO ORDE DE DATOS EN UPTADE CONTACT */
        dispatch(
          updateContact({
            id: editContact.id,
            name: editContact.name,
            email: editContact.email,
            phone: editContact.phone,
            carrera: editContact.carrera,
            puesto: editContact.puesto,
            imagen: "imagen.png",
          })
        );
        setEditedProduct(null);
        /* aqui con el despachador de estados mando a llamar a mi estado de update contacto que lo que va 
          hacer es que buscara el id con el que 
          tiene relacion mi objeto y luego  por medio del ir va reemplazar lo valores que le mandamos en el objeto */
      })
      .catch((error) => {
        Toast.fire({
          icon: "success",
          title: "Ocurrio un Error " + error,
        });
      });
  };
  if (loading) {
    return <div className="alert alert-info">Cargando contactos...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error {error} </div>;
  }

  return (
    <>
      <Row className="w-100 d-flex align-items-center justify-content-center">
        {allContacts.data.map((contacto) => (
          <Card className="p-4 my-1 tarjeta-noticia" key={contacto.id}>
            {editContact?.id === contacto.id ? (
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
                        value={editContact.name}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editContact,
                            name: e.target.value,
                          })
                        }
                        placeholder="Nombre Contacto"
                      />
                    </Form.Group>
                    <Form.Group controlId="formCategory" className="mb-3">
                      <Form.Label>Puesto</Form.Label>
                      <Form.Control
                        type="text"
                        value={editContact.puesto}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editContact,
                            puesto: e.target.value,
                          })
                        }
                        placeholder="Puesto que Desempeña"
                      />
                    </Form.Group>
                    <Form.Group controlId="formDate">
                      <Form.Label>Correo Electronico</Form.Label>
                      <Form.Control
                        type="email"
                        value={editContact}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editContact,
                            email: e.target.value,
                          })
                        }
                        placeholder="Correo Electronico "
                      />
                    </Form.Group>
                    <Form.Group controlId="formDate">
                      <Form.Label>Carrera</Form.Label>
                      <Form.Control
                        type="text"
                        value={editContact.carrera}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editContact,
                            carrera: e.target.value,
                          })
                        }
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
                          value={editContact.phone}
                          onChange={(e) =>
                            setEditedProduct({
                              ...editContact,
                              phone: e.target.value,
                            })
                          }
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
                      onClick={() => setEditedProduct(null)}
                    >
                      Cancelar
                    </Button>
                    <Button variant="dark" onClick={handleClickEditContaco}>
                      Guardar Editar
                    </Button>
                  </Col>
                </Row>
              </Form>
            ) : (
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
                    style={{ fontSize: "1rem", color: "#333" }}
                  >
                    Nombre: {contacto.name}
                  </Card.Text>
                  <Card.Text
                    className="mb-1 text-muted"
                    style={{ fontSize: "1rem", color: "#333" }}
                  >
                    Puesto: {contacto.puesto}
                  </Card.Text>
                  <Card.Text
                    className="mb-1 text-muted"
                    style={{ fontSize: "1rem", color: "#333" }}
                  >
                    Email: {contacto.email}
                  </Card.Text>
                  <Card.Text
                    className="mb-1 text-muted"
                    style={{ fontSize: "1rem", color: "#333" }}
                  >
                    Tel: {contacto.phone}
                  </Card.Text>
                  {userProp === "admin" && (
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="secondary"
                        className="btn-md"
                        onClick={() => setEditedProduct(contacto)}
                      >
                        Editar
                      </Button>
                    </div>
                  )}
                </Col>
              </Row>
            )}
          </Card>
        ))}
      </Row>
    </>
  );
};
export default ItemContacto;
