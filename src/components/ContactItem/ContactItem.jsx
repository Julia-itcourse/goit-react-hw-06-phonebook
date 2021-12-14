import React from "react";
import styles from "./ContactItem.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => dispatch(contactsActions.onRemoveContact(id));

  const { name, number, id } = contact;
  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {name}: {number}
      </span>
      <button
        className={styles.button}
        type="button"
        onClick={() => removeItem(id)}
      >
        Remove
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ContactItem;
