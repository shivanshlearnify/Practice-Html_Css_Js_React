import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(1);
  return (
    <div className="user-card">
      <h2>Count - {count}</h2>
      <h2>Name : {props.name}</h2>
      <h2>Location : Haldwani</h2>
      <h2>Contact : Haldwani</h2>
    </div>
  );
};

export default User;
