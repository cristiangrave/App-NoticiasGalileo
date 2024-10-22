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

function App() {
  const userRol = useSelector((state) => state.userSlice.role);
  const [view, setView] = useState("noticias");
  const [viewAdmin, setViewAdmin] = useState("noticiasAdmin");
  const handleNavClick = (selectedView) => {
    setView(selectedView);
  };
  const handleNavClickAdmin = (selectedViewAdmin) => {
    setViewAdmin(selectedViewAdmin);
  };
  const handleCreateItem = () => {
    if (viewAdmin === "noticiasAdmin") {
      setViewAdmin("crearNoticia");
    } else {
      setViewAdmin("crearContacto");
    }
  };

  return (
    <div className="App ">
      <NavbarNoticiasContacto />
      <Container className="mt-1">
        {userRol === "user" && (
          <>
            <ButtonsList onViewChange={(handleNavClick, handleCreateItem)} />
            <Row>
              <Col>
                {view === "noticias" && <NoticiasList />}
                {view === "contactos" && <ContactList />}
              </Col>
            </Row>
          </>
        )}
        {userRol === "admin" && (
          <>
            <ButtonsListAdmin
              onViewChange={handleNavClickAdmin}
              crearItem={handleCreateItem}
            />
            <Row>
              <Col>
                {viewAdmin === "noticiasAdmin" && (
                  <NoticiasList usuarioProp={userRol} />
                )}
                {viewAdmin === "contactosAdmin" && (
                  <ContactList userProp={userRol} />
                )}
                {viewAdmin === "crearNoticia" && <ItemCrearNoticia />}
                {viewAdmin === "crearContacto" && <ItemCrearContacto />}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
