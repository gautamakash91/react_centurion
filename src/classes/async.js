import React from "react";

export default class Async extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 10,
      b: 20,
      c: 30
    }
  }

  handleClick = () => {
    var a1 = this.state.a;
    var b1 = this.state.b;
    var c1 = this.state.c;

    b1 = a1;
    c1 = b1;

    this.setState({
      b: b1,
      c: c1
    })
  }


  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
        >
          click me
        </button>
        <br />
        a: {this.state.a} <br />
        b: {this.state.b} <br />
        c: {this.state.c} <br />
      </div>
    )
  }
}