import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../Components/ToDo";
import { add } from "../store";

const Home = ({ toDos, addTodo }) => {
  const [text, setText] = useState("");
  const onChange = (event) => setText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    addTodo(text);
  };
  return (
    <>
      <h1>To Do!</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
      </form>
      <ul>
        {toDos.map((todo) => {
          return <ToDo {...todo} key={todo.id} />;
        })}
      </ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return { toDos: state };
};
const mapDispatchToProps = (dispatch) => {
  return { addTodo: (text) => dispatch(add(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
