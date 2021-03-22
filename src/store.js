import { createStore } from "redux";
// Actions
const ADD_TODO = "ADD";
const DEL_TODO = "DEL";
const date = Date.now;
const addTodo = (text) => {
  return { type: ADD_TODO, text };
};
const delTodo = (id) => {
  return { type: DEL_TODO, id };
};
// Reducer
const reducer = (state = [], acitons) => {
  switch (acitons.type) {
    case ADD_TODO:
      const newTodoObj = { text: acitons.text, id: date() };
      return [newTodoObj, ...state];
    case DEL_TODO:
      return state.filter((todo) => todo.id !== acitons.id);
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);
// Subscriber
// store.subscribe();
// Dispatcher
// const dispatchAddTodo = (text) => {
//   store.dispatch(addTodo(text));
// };
// const dispatchDelTodo = (id) => {
//   // impl: id => event.target.parentNode.id
//   store.dispatch(delTodo(id));
// };
// Dispatchers => Action creator
export const actionCreator = { addTodo, delTodo };

export default store;
