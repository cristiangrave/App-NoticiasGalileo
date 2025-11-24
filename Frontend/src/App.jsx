import "./App.css";
import NavbarNoticiasContacto from "./componentes/NavbarNoticias/NavbarNoticias.jsx";
import ContactList from "./componentes/ItemContactList/ContactList.jsx";
import { useSelector } from "react-redux";
import React, { useState } from "react"; /* el use stage es  de react */
import NoticiasList from "./componentes/itemNoticiaList/noticiaList.jsx";
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
          <div className="container mx-auto mt-1 px-4">
            <ButtonsListAdmin
              onViewChange={handleNavClick}
              crearItem={handleCreateItem}
            />
            <div className="flex flex-wrap">
              <div className="w-full">
                {view === "noticias" && <NoticiasList />}
                {view === "contactos" && <ContactList />}
                {view === "crearNoticia" && <ItemCrearNoticia />}
                {view === "crearContacto" && <ItemCrearContacto />}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
