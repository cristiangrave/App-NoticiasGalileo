import React, { useState } from "react";
import { Card, Row, Col, Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemCrearNoticia.css";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addNews } from "../../redux/reducers/newsSlice";
import axios from "axios";

const ItemCrearNoticia = () => {
  /* se creo el estado de la fecha para que agarre la fecha actual  */
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [carrera, setCarrera] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");

  /*   const [imagen, setImagen] = useState("");
   */
  const despachador = useDispatch();
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
  const handleGuardarNoticia = () => {
    if (fecha && titulo && descripcion && carrera) {
      const newNoticia = {
        titulo: titulo,
        descripcion: descripcion,
        carrera: carrera,
        imagen: "imagen.png",
        fecha: fecha,
        estado: estado,
        categoria: categoria,
      };
      console.log("Nueva Noticia : ", newNoticia);
      despachador(addNews(newNoticia));
      axios
        .post("http://localhost:3001/noticiasEstudiantes/", newNoticia)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Noticia Guardada Correctamente",
          });
          setTitulo("");
          setDescripcion("");
          setCarrera("");
        })
        .catch((error) => {
          console.error(error);
          Toast.fire({
            icon: "danger",
            title: "Error al Crear Noticia Nueva " + error,
          });
        });
    }
  };

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Card className="p-4 my-4 tarjeta-noticia">
        <Form>
          <Row className="mb-3">
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Row>
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
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={6} className="mb-3">
                  <Form.Group controlId="formTitle">
                    <Form.Label>Título Noticia</Form.Label>
                    <Form.Control
                      type="text"
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                      placeholder="Ingrese un Título"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} className="mb-3">
                  <Form.Group controlId="formStatus">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                    >
                      <option value={"activo"}>Activo</option>
                      <option value={"inactivo"}>No Activo</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} className="mb-3">
                  <Form.Group controlId="formCategory">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                    >
                      <option value={1}>Categoria 1</option>
                      <option value={2}>Categoria 2</option>
                      <option value={3}>Categoria 3</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} className="mb-3">
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
              <Form.Group controlId="formDescription">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  placeholder="Ingrese una Descripción"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <Form.Group controlId="formCareer">
                <Form.Label>Carrera</Form.Label>
                <Form.Select
                  value={carrera}
                  onChange={(e) => setCarrera(e.target.value)}
                >
                  <option value={1}>Carrera 1</option>
                  <option value={2}>Carrera 2</option>
                  <option value={3}>Carrera 3</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2">
                Cancelar
              </Button>
              <Button variant="dark" onClick={handleGuardarNoticia}>
                Guardar
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Row>
  );
};

export default ItemCrearNoticia;
