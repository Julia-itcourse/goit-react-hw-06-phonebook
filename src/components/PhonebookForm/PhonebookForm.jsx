import styles from "./PhonebookForm.module.css";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import "./notification.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import { getContacts } from "../../redux/contacts/contactsSelectors";

const PhonebookForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onAddContact = (contact) => {
    dispatch(contactsActions.onAddContact(contact));
  };

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const sameContact = contacts.find(
      (existingContact) => existingContact.name === contact.name,
    );

    if (sameContact) {
      console.log("same contact exists");
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 1500);
    } else {
      onAddContact(contact);
      setName("");
      setNumber("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form__group}>
      <input
        className={styles.form__input}
        name="name"
        type="text"
        value={name}
        onChange={changeName}
        placeholder="Name"
        required
      />

      <input
        className={styles.form__input}
        name="number"
        type="text"
        value={number}
        onChange={changeNumber}
        placeholder="Phone number"
        required
      />

      <button className={styles.button} type="submit">
        Add contact
      </button>

      <CSSTransition
        in={showNotification}
        classNames="notification"
        timeout={250}
        unmountOnExit
      >
        <div className={styles.notification}>Contact already exists!</div>
      </CSSTransition>
    </form>
  );
};

export default PhonebookForm;
