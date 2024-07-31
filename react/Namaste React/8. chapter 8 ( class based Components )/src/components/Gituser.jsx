import react from "react";

class Gituser extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        login: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shivanshlearnify");
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData,
    });
    console.log(jsonData);
  }
  render() {
    const { name, login } = this.state.userInfo;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{login}</h1>
      </div>
    );
  }
}

export default Gituser;
