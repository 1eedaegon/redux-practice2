import { createSlice, configureStore } from "@reduxjs/toolkit";
const date = Date.now;

// The Todos state
const todos = createSlice({
  name: "todosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => [{ text: action.payload, id: date() }, ...state],
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});
// Store
const store = configureStore({ reducer: todos.reducer });
export const { add, remove } = todos.actions;
export default store;

// Actions
// const addTodo = createAction("ADD");
// const delTodo = createAction("DEL");
// const date = Date.now;

// Reducer
// const reducer = createReducer([], {
//   [addTodo]: (state, action) => [
//     { text: action.payload, id: date() },
//     ...state,
//   ],
//   [delTodo]: (state, action) =>
//     state.filter((todo) => todo.id !== action.payload),
// });
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
// const store = configureStore({ reducer });
// Dispatchers => Action creator
// export const actionCreator = { addTodo, delTodo };

// export default store;
