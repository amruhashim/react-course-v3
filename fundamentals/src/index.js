import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* function Greetings() {
  return <h2>My first react component</h2>;
} */

/* function Greetings() {
  return React.createElement("h2", {}, "hello world");
} */

//a better practice is to use div or raturn other such elements since its easier and straight forward
/* function Greetings() {
  return (
    <div>
      <h2>My first Components</h2>
    </div>
  );
} */

//nesting components
/* function Greetings() {
  return (
    <div>
      <Person />
      <p>this is my message</p>
    </div>
  );
}

const Person = () => <h2>hi</h2>; */

//time for the first project

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  const title = () => <h2>The Let Them Theory</h2>;
  return (
    <article className="book">
      <img src="./images/book-2.jpg" alt="Image of the book" />
      {title}
      <Author />
      <p />
    </article>
  );
};

// const Author = () => <h4 style={{ color: "red" }}>Mel Robbins</h4>;
const Author = () => {
  const inlineCss = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineCss}>Mel Robbins</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
