import { combineReducers } from "redux"
import { createReducer } from '@reduxjs/toolkit'
import contactsActions from './contactsActions'

const handleAdd = (state, action) =>{
    return [...state, action.payload.newContact]
}

const handleRemove = (state, action) =>{
    return state.filter((contact) => contact.id !== action.payload)
}

const items = createReducer([], {
    [contactsActions.onAddContact]: handleAdd,
    [contactsActions.onRemoveContact]: handleRemove,
})

const filter = createReducer('', {
    [contactsActions.onChangeFilter]: (state, action) => action.payload
})


export default combineReducers({
  items,
  filter,
})

//*______________________BEFORE CREATE REDUCER__________________
// import { combineReducers } from "redux"
// import contactsActions from './contactsActions'



// const items = (state = [], { type, payload }) => {
//   console.log("contactsReducer.items")
//   switch (type) {
//     case contactsActions.onAddContact.type:
//       console.log(payload.newContact)
//       return [...state, payload.newContact]

//     case contactsActions.onRemoveContact.type:
//       return state.filter((contact) => contact.id !== payload)

//     default:
//       return state
//   }
// }

// const filter = (state = "", { type, payload }) => {
//   console.log("contactsReducer.filter")
//   switch (type) {
//     case contactsActions.onChangeFilter.type:
//       return payload

//     default:
//       return state
//   }
// }

// export default combineReducers({
//   items,
//   filter,
// })

// *______________________BEFORE TOOLKIT__________________________

// import { combineReducers } from "redux"
// import actionTypes from "./contactsActionTypes"


// const items = (state = [], { type, payload }) => {
//   console.log("contactsReducer.items")
//   switch (type) {
//     case actionTypes.ADD:
//       console.log(payload.newContact)
//       return [...state, payload.newContact]

//     case actionTypes.REMOVE:
//       return state.filter((contact) => contact.id !== payload.contactId)

//     default:
//       return state
//   }
// }

// const filter = (state = "", { type, payload }) => {
//   console.log("contactsReducer.filter")
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload.filter

//     default:
//       return state
//   }
// }

// export default combineReducers({
//   items,
//   filter,
// })
