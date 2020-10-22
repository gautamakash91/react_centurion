import React from "react";
import Child from "./child";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 20
    }
  }

  handleShow = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div>
        Hello from main
        <input
          value={this.state.a}
          onChange={(e) => {
            this.setState({
              a: e.target.value
            })
          }}
        />

        {this.state.a === 20 &&
          <Child
            vala={this.state.a}
          />
        }

      </div>
    )
  }
}