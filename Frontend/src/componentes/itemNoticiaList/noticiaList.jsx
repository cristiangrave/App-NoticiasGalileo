import ItemNoticia from "../ItemNoticia/ItemNoticia";
const NoticiasList = ({ usuarioProp }) => {
  return (
    <div className="container mt-2">
      <ul className="list-group">
        <ItemNoticia usuarioProp={usuarioProp} />
      </ul>
    </div>
  );
};
export default NoticiasList;
