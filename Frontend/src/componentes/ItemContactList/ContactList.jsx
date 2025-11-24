import "./ContactList.css";
import ItemContacto from "../itemContacto/itemContacto";

const ContactList = ({ userProp }) => {
  return (
    <div className="w-full pb-10">
      <ItemContacto userProp={userProp} />
    </div>
  );
};
export default ContactList;
