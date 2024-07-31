import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child component");
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  render() {
    console.log("child render");
    return (
      <div className="user-card">
        <h2>count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h2>Name : {this.props.name}</h2>
        <h2>Location : Haldwani</h2>
        <h2>Contact : Haldwani</h2>
      </div>
    );
  }
}

export default UserClass;
