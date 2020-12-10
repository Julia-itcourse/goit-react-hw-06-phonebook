import { combineReducers } from "redux"
import actionTypes from "./contactsActionTypes"

//?State
// {
//     contacts: {
//       items: [],
//       filter: ''
//     }
//   }

const items = (state = [], { type, payload }) => {
  console.log("contactsReducer.items")
  switch (type) {
    case actionTypes.ADD:
      console.log(payload.newContact)
      return [...state, payload.newContact]

    case actionTypes.REMOVE:
      return state.filter((contact) => contact.id !== payload.contactId)

    default:
      return state
  }
}

const filter = (state = "", { type, payload }) => {
  console.log("contactsReducer.filter")
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload.filter

    default:
      return state
  }
}

export default combineReducers({
  items,
  filter,
})
