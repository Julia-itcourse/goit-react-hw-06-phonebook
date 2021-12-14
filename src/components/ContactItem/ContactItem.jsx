import React from "react";
import styles from "./ContactItem.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const ContactItem = ({ contact, onRemoveContact }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => dispatch(onRemoveContact(id));

  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>
      <button
        className={styles.button}
        type="button"
        onClick={() => removeItem(contact.id)}
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
