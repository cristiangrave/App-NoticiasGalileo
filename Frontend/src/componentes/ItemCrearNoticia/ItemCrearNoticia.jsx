import React, { useEffect, useState } from "react";
import { Card, Row, Col, Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemCrearNoticia.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addNews } from "../../redux/reducers/newsSlice";
import axios from "axios";
import { readCategoria } from "../../redux/reducers/categoriaSlice";
import { readCarrera } from "../../redux/reducers/carreraSlice";

const ItemCrearNoticia = () => {
  /* se creo el estado de la fecha para que agarre la fecha actual  */
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [carrera, setCarrera] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const allCategorias = useSelector((state) => state.categoria);
  const allCarreras = useSelector((state) => state.carrera);
  const despachador = useDispatch();
  /*   const [imagen, setImagen] = useState("");
   */

  useEffect(() => {
    /* esto lo hago para que a la hora de que se lean las categorias y carreras tengan datos de la base de datos */
    /* consulta para tener las categorias */
    axios
      .get("http://localhost:3001/categorias")
      .then((response) => {
        despachador(readCategoria(response.data.data));
      })
      .catch((error) => console.error(error));
    /* consulta para poder tener las carreras */
    axios
      .get("http://localhost:3001/carreras")
      .then((response) => {
        console.log("Categorias : ", response);
        despachador(readCarrera(response.data.data));
      })
      .catch((error) => console.error(error));
  }, [despachador]);

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
    if (titulo && fecha && descripcion && carrera) {
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
              className="d-flex justify-content-center align-items-center">
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
                      onChange={(e) => setEstado(e.target.value)}>
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
                      onChange={(e) => setCategoria(e.target.value)}>
                      {allCategorias.data.map((categoria) => (
                        <option value={categoria.idcategoria}>
                          {categoria.nombre}
                        </option>
                      ))}
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
                  onChange={(e) => setCarrera(e.target.value)}>
                  {allCarreras.data.map((carrera) => (
                    <option value={carrera.idcarrera}>
                      {carrera.descripcion}
                    </option>
                  ))}
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
