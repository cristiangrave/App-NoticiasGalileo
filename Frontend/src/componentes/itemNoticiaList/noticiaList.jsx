import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemNoticia from "../ItemNoticia/ItemNoticia";
/* import { useDispatch } from "react-redux";
 */
const NoticiasList = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  /*   const dispatch = useDispatch();
   */
  useEffect(() => {
    axios
      .get("http://localhost:3001/noticiasEstudiantes") // endpoint de contactos de Estudiantes
      .then((response) => {
        setNoticias(response.data.data); // Accedemos a la lista de contactos
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="alert alert-info">Cargando Noticias...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error Noticias {error} </div>;
  }
  /*const onDone = (id) => {
    dispatch(removeGoal(id));
  };*/
  return (
    <div className="container mt-2">
      <ul className="list-group">
        {noticias.map((dataNoticias) => (
          <ItemNoticia key={dataNoticias.id} {...dataNoticias} />
        ))}
      </ul>
    </div>
  );
};
export default NoticiasList;
