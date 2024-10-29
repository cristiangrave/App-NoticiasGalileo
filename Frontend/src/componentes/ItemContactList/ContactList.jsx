import "./ContactList.css";
import ItemContacto from "../itemContacto/itemContacto";

const ContactList = ({ userProp }) => {
  return (
    <div className="container mt-2">
      <ul className="list-group">
        <ItemContacto userProp={userProp} />
      </ul>
    </div>
  );
};
export default ContactList;
