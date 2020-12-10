
//? notes of redux lecture


// //reducer takes state and does action on it. To deside what action to do, it checks
// //type in action in switch

// const timerReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "timer/increment":
//       return state + action.payload.value
//     case "timer/dectrement":
//       return state - action.payload.value
//     default:
//       return state
//   }
// }
// export default timerReducer


// //(state = 0) - inital value. It is mandatory to state it
// // as otherwice during 1st render it will get value of undefined

// //*===========REFACTORING=========

//     //     timer:{
//     //         value:0,
//     //         step:0
//     //     }
//     // }
// const initialValue = {
//     value: 0,
//     step: 0
// }
//     const timerReducer = (state = initialValue, action) => {
//         switch (action.type) {
//           case "timer/increment":
//             return {...state, value: state + action.payload.value}
//           case "timer/dectrement":
//             return {...state, value: state - action.payload.value}
//           default:
//             return state
//         }
//       }
//       export default timerReducer

//       //*===========REFACTORING=CREATING SEVERAL REDUCERS from 1========
// import {combineReducers} from 'redux'
//       const initialValue = {
//         value: 0,
//         step: 0
//     }
//     const valueReducer = (state=0, {type, payload}) =>
//     {
//         switch (type) {
//             case "timer/increment":
//               return state + payload.value
//             case "timer/dectrement":
//               return  state - payload.value
//             default:
//               return state
//     } }

//     const stepReducer = (state=5, action) =>
//     {
//               return state
//     } 
//     export default combineReducers({
//         value: valueReducer,
//         step: stepReducer,

//     });

//     //using smallreducers for each property of object saves from 
//     //having to use ...state which is much better for complex objects


//     //?File index js content
//     import React from 'react';
// import ReactDOM from 'react-dom';
// import './sharedStyles/global.css';
// import App from './components/App/App';
// import {Provider} from 'react-redux'; 
// import store from './redux/store';


// ReactDOM.render(
//   <Provider store = {store}>
//     <App /></Provider>
//   ,
//   document.getElementById('root')
// );

// //? for exapmle component Timer. put into the Timer.jsx file

// import React from 'react';
// import {connect} from 'react-redux';
// import timerActions from '../redux/timerActions'

// //now Timer doesnt have state and we refactor it from class to function component

// const Timer = ({value, onIncrement, onDecrement}) =>{
//   <div>
//     <button type = "button" onClick = {onDecrement}>-</button>
//     <div>{value} minutes</div>
//     <button type = 'button' onClick = {onIncrement}>+</button>
//   </div>
// }

// // mapStateToProps - takes parts of our state and puts into props
// const mapStateToProps = state =>{
//   return {
//     value: state.timerValue, // this obj will be spread to the props of timer here:const Timer = ({value, onIncrement, onDecrement}) =>{
//   }
// }
// //if we dont need to put props, instead of mapStateToProps use null as arg

// //dispatch - method to connect sending of actions to the props of comp

// const mapDispatchToProps = dispatch=>{ return {
//   onIncrement: ()=>dispatch(timerActions.increment(10))}}
//   onDecrement: ()=>dispatch(timerActions.decrement(10))
// export default connect(mapStateToProps, mapDispatchToProps)(Timer)

// //?above example is can be shortened to below. Redux will convert it to the above under-the-hood

// const mapDispatchToPtops = {
//   onIncrement: timerActions.increment,
//   onDecrement: timerActions.decrement,
// }

// //===========REFACTORING=====================

// const mapStateToProps = state =>{
//   return {
//     value: state.timer.value,
//   }
// }



// //?File TimerActions Content
// // const { bindActionCreators } = require("redux");//?whaat?

// // const increment = {
// //     type: 'timer/increment',
// //     payload:{
// //         value:5
// //     }
// // };
// // // action.payload.value
// // const decrement = {
// //     type: 'timer/decrement',
// //     payload:{
// //         value:5
// //     }
// // };
// //for dymanic incertion of values use ACTION CREATOR:
// //then use like increment(5), 5 will be used for value
// const increment = value => {
//     return {type: 'timer/increment',
//      payload:{
//          value,
//      }}
//  };
 
//  const decrement = value => {
//      return {type: 'timer/decrement',
//       payload:{
//           value,
//       }}
//   };
 
//   export default {increment, decrement}


//   //?file store,js content
//   import {createStore, combineReducers} from 'redux';
//   import timerReducer from './timerReducer'
  
  
//   const rootReducer = combineReducers({
//       timerValue: timerReducer, 
//   })
  
  
//   const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
//   //storage. thanks to root reducer all reducers will have access only to their
//   //corresponding properties of this obj. Like timeReducer will only have access 
//   // to timervalue property
//   // {
//   //     timerValue:[], 
//   //     user: {
//   //         login: "qwe",
//   //     },
//   //     todos:{
//   //         items: [],
//   //         filter:'',
//   //     }
//   // }
  
  
//   //*================REFACTORING================
  
  
//   const rootReducer = combineReducers({
//       timer: timerReducer, 
//   })
  
  
//   const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
//    // based on this initial state
//   // {
//   //     timer:{
//   //         value:0,
//   //         step:0
//   //     }
//   // }
  