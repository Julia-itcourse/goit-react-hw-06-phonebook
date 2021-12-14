import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const handleAdd = (state, action) => {
  return [...state, action.payload.newContact];
};

const handleRemove = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const handleSave = (state, action) => {
  return localStorage.getItem("contacts")
    ? JSON.parse(localStorage.getItem("contacts"))
    : state;
};

const items = createReducer([], {
  [contactsActions.onAddContact]: handleAdd,
  [contactsActions.onRemoveContact]: handleRemove,
  [contactsActions.onSaveContact]: handleSave,
});

const filter = createReducer("", {
  [contactsActions.onChangeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
