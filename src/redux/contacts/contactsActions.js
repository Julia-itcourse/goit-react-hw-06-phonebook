import { createAction } from "@reduxjs/toolkit";

const onAddContact = createAction("contact/add", ({ name, number, id }) => ({
  payload: {
    newContact: {
      name,
      number,
      id,
    },
  },
}));

const onRemoveContact = createAction("contact/remove");

const onChangeFilter = createAction("contact/filter");

const onSaveContact = createAction("contacts/save");

export default {
  onAddContact,
  onRemoveContact,
  onChangeFilter,
  onSaveContact,
};
