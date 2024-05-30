import React from "react";
import ReactDOM from "react-dom/client";


const JsxHeading = () => (
<h1 className="head">hello world</h1>
);

// functional component
const HeadingComponent = () => {
    return (
      <div>
        <JsxHeading />
        <h1>Hello world!!</h1>
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
