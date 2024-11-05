import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Form, Image } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { readContact, updateContact } from "../../redux/reducers/contactSlice";
import Swal from "sweetalert2";
import { readCarrera } from "../../redux/reducers/carreraSlice";
const ItemContacto = () => {
  const allContacts = useSelector((state) => state.conctac);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editContact, setEditedProduct] = useState(null);
  const dispatch = useDispatch();
  const tipoUsuario = useSelector((state) => state.user.role);
  const allCarreras = useSelector((state) => state.carrera);

  /*useEffect : se ejecuta una vez a la hora de que renderize nuestro componente, pero se puede ejecutar mas veces con una dependencia(useEffect : tiene dos parametros , funcion , arreglo(dependencia))
  bueno y aqui cada vez que utilizo el dispatch useEffect Renderiza de nuevo con los datos del GET para colocar datos actualizados :)*/
  useEffect(() => {
    axios
      .get("http://localhost:3001/contactosEstudiantes")
      .then((res) => {
        dispatch(readContact(res.data.data));
        setLoading(false);
        /*         console.log("contactos : ", res);
         */
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    axios
      .get("http://localhost:3001/carreras")
      .then((response) => {
        dispatch(readCarrera(response.data.data));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);
  /* Configuraciones para el Sweetalert(lib para alertas) */
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
    /*Con axios hacemos la petcion de tipo PUT a nuestro Backend para que se actualize en nuestro Backend y le pasamos los parametrode nuestro estado editContact */
    axios
      .put(
        `http://localhost:3001/contactosEstudiantes/${editContact.idcontacto}`,
        {
          nombre: editContact.name,
          correo: editContact.email,
          telefono: editContact.phone,
          carrera: editContact.carrera,
          puesto: editContact.puesto,
          estado: editContact.estado,
        }
      )
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Contacto Editado Correctamente",
        });
        /* IMPORTATE RECORDAR QUE AL OTRO LADO RECIBIMOS UN OBJETO CON EL MISMO ORDEN DE DATOS EN UPTADE CONTACT */
        dispatch(
          updateContact({
            id: editContact.idcontacto,
            name: editContact.nombre,
            email: editContact.correo,
            phone: editContact.telefono,
            carrera: editContact.carrera,
            puesto: editContact.puesto,
            imagen: "imagen.png",
            estado: editContact.estado,
          })
        );
        setEditedProduct(null);
        /*Con el despachador solo estamos actualizando el estado en el Fronted*/
      })
      .catch((error) => {
        Toast.fire({
          icon: "success",
          title: "Ocurrio un Error " + error,
        });
      });
  };
  if (loading) {
    return (
      <>
        <div className="alert alert-info">Cargando contactos...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="alert alert-danger">Error Contactos : {error} </div>;
      </>
    );
  }

  return (
    <>
      <Row className="w-100 d-flex align-items-center justify-content-center">
        {allContacts.data.map((contacto) => (
          <Card className="p-4 my-1 tarjeta-noticia" key={contacto.idcontacto}>
            {editContact?.idcontacto === contacto.idcontacto ? (
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
                    <Form.Group controlId="formNombreContacto" className="mb-3">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        value={editContact.nombre}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editContact,
                            name: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group controlId="selectPuesto">
                      <Form.Label>Puesto</Form.Label>
                      <Form.Select
                        value={editContact.puesto}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editContact,
                            puesto: e.target.value,
                          })
                        }
                      >
                        <option value={""}>Selecciona..</option>
                        <option value={"Docente"}>Docente</option>
                        <option value={"Administracion"}>Administracion</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="inputCorreo">
                      <Form.Label>Correo Electronico</Form.Label>
                      <Form.Control
                        type="email"
                        value={editContact.correo}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editContact,
                            correo: e.target.value,
                          })
                        }
                        placeholder="Correo Electronico "
                      />
                    </Form.Group>
                    <Form.Group controlId="formCareer">
                      <Form.Label>Carrera</Form.Label>
                      <Form.Select
                        value={editContact.carrera}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editContact,
                            carrera: e.target.value,
                          })
                        }
                      >
                        <option value={""}>Selecciona..</option>
                        {allCarreras.data.map((carrera) => (
                          <option
                            key={carrera.idcarrera}
                            value={carrera.idcarrera}
                          >
                            {carrera.descripcion}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Col xs={12} md={12}>
                  <Row>
                    <Col xs={12} md={6} className="mb-3">
                      <Form.Group controlId="formCareer">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                          type="number"
                          value={editContact.telefono}
                          onChange={(e) =>
                            setEditedProduct({
                              ...editContact,
                              telefono: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                      <Form.Group controlId="formStatus" className="mb-3">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select
                          value={editContact.estado}
                          onChange={(e) =>
                            setEditedProduct({
                              ...editContact,
                              estado: e.target.value,
                            })
                          }
                        >
                          <option value={"activo"}>Activo</option>
                          <option value={"inactivo"}>Inactivo</option>
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
                    Nombre: {contacto.nombre}
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
                    Email: {contacto.correo}
                  </Card.Text>
                  <Card.Text
                    className="mb-1 text-muted"
                    style={{ fontSize: "1rem", color: "#333" }}
                  >
                    Tel: {contacto.telefono}
                  </Card.Text>
                  {tipoUsuario === "admin" && (
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
