import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNoticiasContacto from "./componentes/NavbarNoticias/NavbarNoticias.jsx";
import ContactList from "./componentes/ItemContactList/ContactList.jsx";
import { useSelector } from "react-redux";
import React, { useState } from "react"; /* el use stage es  de react */
import NoticiasList from "./componentes/itemNoticiaList/noticiaList.jsx";
import ButtonsList from "./componentes/buttonsList/buttonList.jsx";
import { Row, Col, Container } from "react-bootstrap";
import ButtonsListAdmin from "./componentes/buttonListAdmin/buttonListAdmin.jsx";
import ItemCrearNoticia from "./componentes/ItemCrearNoticia/ItemCrearNoticia.jsx";
import ItemCrearContacto from "./componentes/ItemCrearContacto/ItemCrearContacto.jsx";
import LoginForm from "./componentes/LoginForm/LoginForm.jsx";

function App() {
  const useAuth = useSelector((state) => state.auth.value);
  const [view, setView] = useState("noticias");
  const handleNavClick = (selectedView) => {
    setView(selectedView);
  };
  const handleCreateItem = () => {
    if (view === "noticias") {
      setView("crearNoticia");
    } else {
      setView("crearContacto");
    }
  };
  /*Utilizando hook createContext: Esto lo hago para poder pasar el  tipo de usuarios a los componentes que la utilizan para no pasar la prop directamente en el componente */
  return (
    <>
      {useAuth === "noAutorizado" && <LoginForm></LoginForm>}
      {useAuth === "autorizado" && (
        <>
          <NavbarNoticiasContacto />
          <Container className="mt-1">
            <ButtonsListAdmin
              onViewChange={handleNavClick}
              crearItem={handleCreateItem}
            />
            <Row>
              <Col>
                {view === "noticias" && <NoticiasList />}
                {view === "contactos" && <ContactList />}
                {view === "crearNoticia" && <ItemCrearNoticia />}
                {view === "crearContacto" && <ItemCrearContacto />}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
