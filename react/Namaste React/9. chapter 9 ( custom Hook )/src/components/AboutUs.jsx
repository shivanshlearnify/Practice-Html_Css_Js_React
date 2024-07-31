import User from "./User";
import UserClass from "./UserClass";
import Gituser from "./Gituser";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <Gituser />
        {/* <User name={"shivansh(Function)"} />
        <UserClass name={"shivansh(class)"} /> */}
      </div>
    );
  }
}

export default AboutUs;
