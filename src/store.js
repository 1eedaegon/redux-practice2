import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { createStore } from "redux";
// Actions
const addTodo = createAction("ADD");
const delTodo = createAction("DEL");
const date = Date.now;

console.log(addTodo(), delTodo());
const reducer = createReducer([], {
  [addTodo]: (state, action) => [
    { text: action.payload, id: date() },
    ...state,
  ],
  [delTodo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});
// Reducer
// const reducer = (state = [], acitons) => {
//   switch (acitons.type) {
//     case addTodo.type:
//       const newTodoObj = { text: acitons.payload, id: date() };
//       return [newTodoObj, ...state];
//     case delTodo.type:
//       return state.filter((todo) => todo.id !== acitons.payload);
//     default:
//       return state;
//   }
// };

// Store
const store = configureStore({ reducer });
// Dispatchers => Action creator
export const actionCreator = { addTodo, delTodo };

export default store;
