// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react!"
// );

// console.log(heading);  // returns object



// nested way to create element

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement(
      "h1",
      {},
      "hello world from h1 tag!"
    ),
    React.createElement(
      "h2",
      {},
      "hello world from h2 tag!"
    )]
  )
);

// console.log(parent);  // returns object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
