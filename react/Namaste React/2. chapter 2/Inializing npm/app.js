import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
