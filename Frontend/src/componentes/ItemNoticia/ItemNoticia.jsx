import React, { useEffect, useState } from "react";
import { Card, Row, Col, Badge, Button, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemNoticia.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { readNews, updateNew } from "../../redux/reducers/newsSlice";
import Swal from "sweetalert2";

const ItemNoticia = () => {
  const noticias = useSelector((state) => state.news);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editNews, setEditNews] = useState(null);
  const despachador = useDispatch();
  const tipoUsuario = useSelector((state) => state.user.role);
  /*Con este estado ya no es  que pasemos el estado por medio de una prop*/
  useEffect(() => {
    axios
      .get("http://localhost:3001/noticiasEstudiantes") // endpoint de contactos de Estudiantes
      .then((response) => {
        despachador(readNews(response.data.data));
        setLoading(false);
        console.log("Noticias : ", response);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
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
  if (loading) {
    return <div className="alert alert-info">Cargando Noticias...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error Noticias {error} </div>;
  }
  const handleUpdateNew = () => {
    axios
      .put(`http://localhost:3001/noticiasEstudiantes/${editNews.id}`, {
        titulo: editNews.titulo,
        descripcion: editNews.descripcion,
        carrera: editNews.carrera,
        imagen: editNews.imagen,
        fecha: editNews.fecha,
        estado: editNews.estado,
      })
      .then(() => {
        despachador(
          updateNew({
            id: editNews.id,
            titulo: editNews.titulo,
            descripcion: editNews.descripcion,
            carrera: editNews.carrera,
            imagen: editNews.imagen,
            fecha: editNews.fecha,
            estado: editNews.estado,
          })
        );
        setEditNews(null);
        Toast.fire({
          icon: "success",
          title: "Contacto Editado Correctamente",
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: "success",
          title: "Ocurrio un Error " + error,
        });
      });
  };
  return (
    <Row className="w-100 d-flex align-items-center justify-content-center">
      {noticias.data.map((noticia) => (
        <Card key={noticia.idnoticia} className="p-4 my-1 tarjeta-noticia">
          {editNews?.idnoticia === noticia.idnoticia ? (
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
                          value={editNews.titulo}
                          onChange={(e) =>
                            setEditNews({ ...editNews, titulo: e.target.value })
                          }
                          placeholder="Ingrese un Título"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                      <Form.Group controlId="formStatus">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select
                          value={editNews.estado}
                          onChange={(e) =>
                            setEditNews({ ...editNews, estado: e.target.value })
                          }
                        >
                          <option value={"activo"}>Activo</option>
                          <option value={"inactivo"}>No Activo</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                      <Form.Group controlId="formCategory">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Select>
                          <option>Categoria 1</option>
                          <option>Categoria 2</option>
                          <option>Categoria 3</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                      <Form.Group controlId="formDate">
                        <Form.Label>Fecha Publicación</Form.Label>
                        <Form.Control
                          type="date"
                          value={editNews.fecha}
                          onChange={(e) =>
                            setEditNews({ ...editNews, fecha: e.target.value })
                          }
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
                      value={editNews.descripcion}
                      onChange={(e) =>
                        setEditNews({
                          ...editNews,
                          descripcion: e.target.value,
                        })
                      }
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
                      value={editNews.carrera}
                      onChange={(e) =>
                        setEditNews({ ...editNews, carrera: e.target.value })
                      }
                    >
                      <option>Carrera 1</option>
                      <option>Carrera 2</option>
                      <option>Carrera 3</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="d-flex justify-content-end">
                  <Button
                    variant="secondary"
                    className="me-2"
                    onClick={() => setEditNews(null)}
                  >
                    Cancelar
                  </Button>
                  <Button variant="dark" onClick={handleUpdateNew}>
                    Editar Noticia
                  </Button>
                </Col>
              </Row>
            </Form>
          ) : (
            <>
              <Row className="g-0">
                <Col xs={12} md={6} className="order-md-1 order-2 ">
                  <Card.Img
                    src="imagen-noticia.png" // AQUI VA LA IMAGEN AUN NO LA COLOCO ESTAMOS EN PRUEBAS
                    variant="top"
                    alt="Imagen de noticia"
                    className="img-fluid rounded" /* Clase para hacer la imagen responsiva y con bordes redondeados */
                  />
                </Col>
                <Col xs={12} md={6} className="order-md-2 order-1 ps-2">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted">{noticia.fecha}</small>
                    <Badge className="p-2 badge-categoria">
                      {noticia.categoria[0].descripcion}
                    </Badge>
                  </div>
                  <Card.Title className="mt-2 titulo-noticia">
                    {noticia.titulo}
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Body>
                    <Card.Text
                      className="mt-0"
                      style={{ fontSize: "1rem", color: "#333" }}
                    >
                      {noticia.descripcion}
                    </Card.Text>
                    <p className="text-muted " style={{ fontSize: "0.9rem" }}>
                      {noticia.fecha}
                    </p>
                  </Card.Body>
                  {tipoUsuario === "admin" && (
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="secondary"
                        className="btn-md"
                        onClick={() => setEditNews(noticia)}
                      >
                        Editar
                      </Button>
                    </div>
                  )}
                </Col>
              </Row>
            </>
          )}
        </Card>
      ))}
    </Row>
  );
};

export default ItemNoticia;
