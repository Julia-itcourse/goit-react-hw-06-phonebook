import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (filterValue) =>
    dispatch(contactsActions.onChangeFilter(filterValue));

  return (
    <div className={styles.filter__wrap}>
      <h2>Filter the contact list</h2>
      <label>
        <input
          className={styles.form__input}
          type="text"
          name="filter"
          value={value}
          onChange={(event) => onChangeFilter(event.target.value)}
        />
      </label>
    </div>
  );
};

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;
