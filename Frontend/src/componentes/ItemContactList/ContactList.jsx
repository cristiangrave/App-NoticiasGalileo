import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactList.css";
import ItemContacto from "../itemContacto/itemContacto";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/contactosEstudiantes") // endpoint de contactos de Estudiantes
      .then((response) => {
        setContacts(response.data.data); // Accedemos a la lista de contactos
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="alert alert-info">Cargando contactos...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error {error} </div>;
  }

  return (
    <div className="container mt-2">
      <ul className="list-group">
        {contacts.map((contact) => (
          <ItemContacto key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
