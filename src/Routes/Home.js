import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const onChange = (event) => setText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    setText("");
  };
  return (
    <>
      <h1>To Do!</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
      </form>
    </>
  );
};
export default Home;
