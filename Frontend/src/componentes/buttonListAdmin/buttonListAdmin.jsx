import {
  Row,
  Container,
  ButtonGroup,
  Button,
  Col,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ButtonsListAdmin = ({ onViewChange, crearItem }) => {
  const tipoUsuario = useSelector((state) => state.user.role);
  return (
    <>
      <Navbar sticky="top">
        <Container
          className="mt-2 d-flex justify-content-center align-items-center"
          fluid>
          <Row>
            <Col xs={6} md={6} className="mb-2 mb-md-0">
              <ButtonGroup>
                <Button
                  variant="outline-secondary"
                  className="NavbarButtons btn-lg"
                  onClick={() => onViewChange("noticias")}>
                  Noticias
                </Button>
                <Button
                  variant="outline-secondary"
                  className="NavbarButtons btn-lg"
                  onClick={() => onViewChange("contactos")}>
                  Contactos
                </Button>
              </ButtonGroup>
            </Col>
            {tipoUsuario === "admin" ? (
              <Col xs={6} md={6} className="text-end">
                <Button
                  variant="outline"
                  className="NavbarButtons btn-lg"
                  onClick={() => crearItem()}>
                  Crear
                  <FontAwesomeIcon icon={faCirclePlus} className="ms-2" />
                </Button>
              </Col>
            ) : (
              <></>
            )}
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default ButtonsListAdmin;
