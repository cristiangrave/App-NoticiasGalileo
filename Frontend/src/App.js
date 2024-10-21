import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNoticiasContacto from "./componentes/NavbarNoticias/NavbarNoticias.jsx";
import ContactList from "./componentes/ItemContactList/ContactList.jsx";
import { useSelector } from "react-redux";
import React, { useState } from "react"; /* el use stage es  de react */
import NoticiasList from "./componentes/itemNoticiaList/noticiaList.jsx";
import ButtonsList from "./componentes/buttonsList/buttonList.jsx";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  const noticiasEstado = useSelector((state) => state.noticias);
  const [view, setView] = useState("noticias");
  const handleNavClick = (selectedView) => {
    setView(selectedView);
  };
  return (
    <div className="App ">
      <NavbarNoticiasContacto />
      <ButtonsList onViewChange={handleNavClick} />

      <Container className="mt-1">
        <Row>
          <Col>
            {view === "noticias" && <NoticiasList />}
            {view === "contactos" && <ContactList />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
