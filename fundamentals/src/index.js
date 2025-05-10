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
/* const firstBook = {
  title: "The Let Them Theory",
  author: "Jordan",
  img: "./images/book-2.jpg",
};

const secondBook = {
  title: "The Let Them Theory",
  author: "Jordan",
  img: "./images/book-2.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        <p>Description</p>
        <button>buy me</button>
      </Book>

      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ author, img, title, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
}; */
const books = [
  {
    title: "The Let Them Theory",
    author: "Jordan",
    img: "./images/book-2.jpg",
    id: "1",
  },

  {
    title: "The Let Them Theory",
    author: "Jordan",
    img: "./images/book-2.jpg",
    id: "2",
  },
];

/* function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { author, img, title, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
}

const Book = ({ author, img, title, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
}; */

function BookList() {
  const propDrill = () => {
    return "Drill"; // This function returns a string
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} propDrill={propDrill} />;
      })}
    </section>
  );
}

const Book = ({ author, img, title, propDrill }) => {
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={displayTitle}>Display Title</button>
      <h4>{propDrill()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
