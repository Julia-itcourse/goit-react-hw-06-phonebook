import actionTypes from "./contactsActionTypes"
import { v4 as uuidv4 } from "uuid"

const onAddContact = ({ name, number, id }) => {
  console.log("contactsActiosn.onAddContact")
  return {
    type: actionTypes.ADD,
    payload: {
      newContact: {
        name,
        number,
        id,
      },
    },
  }
}

const onRemoveContact = (contactId) => ({
  type: actionTypes.REMOVE,
  payload: {
    contactId,
  },
})

const onChangeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: {
    filter,
  },
})

export default {
  onAddContact,
  onRemoveContact,
  onChangeFilter,
}
