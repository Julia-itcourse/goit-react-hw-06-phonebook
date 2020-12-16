import { createAction } from "@reduxjs/toolkit"
import actionTypes from "./contactsActionTypes"

const onAddContact = createAction("contact/add", ({ name, number, id }) => ({
  payload: {
    newContact: {
      name,
      number,
      id,
    },
  },
}))

const onRemoveContact = createAction('contact/remove');


const onChangeFilter = createAction('contact/filter')


const onSaveContact = createAction('contacts/save')


export default {
  onAddContact,
  onRemoveContact,
  onChangeFilter,
  onSaveContact,
}

//*_______________BEFORE TOOLKIT___________________________________

// import actionTypes from "./contactsActionTypes"
// import { v4 as uuidv4 } from "uuid"

// const onAddContact = ({ name, number, id }) => {
//   console.log("contactsActiosn.onAddContact")
//   return {
//     type: actionTypes.ADD,
//     payload: {
//       newContact: {
//         name,
//         number,
//         id,
//       },
//     },
//   }
// }

// const onRemoveContact = (contactId) => ({
//   type: actionTypes.REMOVE,
//   payload: {
//     contactId,
//   },
// })

// const onChangeFilter = (filter) => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// })

// export default {
//   onAddContact,
//   onRemoveContact,
//   onChangeFilter,
// }
