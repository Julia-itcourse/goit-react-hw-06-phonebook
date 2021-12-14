import { useEffect } from "react";
import ContactItem from "../ContactItem";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ContactList.css";

import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const saveContact = () => dispatch(contactsActions.onSaveContact);
  const visibleContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    saveContact();
  }, []);

  return (
    <TransitionGroup component="ul" className="ContactList">
      {visibleContacts.map((item) => (
        <CSSTransition
          key={item.id}
          timeout={250}
          classNames="ContactList-item-slide"
        >
          <ContactItem contact={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
