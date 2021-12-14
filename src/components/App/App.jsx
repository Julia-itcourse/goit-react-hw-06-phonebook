import ContactList from "../ContactList";
import PhonebookForm from "../PhonebookForm";
import Filter from "../Filter";
import Logo from "../Logo";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsSelectors";

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="Logo-slideIn"
      >
        <Logo />
      </CSSTransition>

      <PhonebookForm />

      <CSSTransition
        in={contacts.length > 1}
        timeout={500}
        classNames={"filter"}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />
    </>
  );
};

export default App;
