import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: ""
    }
  }

  handleName = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      name: ""
    })
  }

  render() {
    return (
      <div>
        Hello from App component
        {this.state.num}
        <br />
        <input value={this.state.name} name="name" onChange={this.handleName} />
        <input value={this.state.email} name="email" onChange={this.handleName} />
        <input value={this.state.phone} name="phone" onChange={this.handleName} />

        <button onClick={this.handleClick}>
          reset name
        </button>
        <br />
        name: {this.state.name} <br />
        email: {this.state.email} <br />
        phone: {this.state.phone} <br />

      </div>
    )
  }
}