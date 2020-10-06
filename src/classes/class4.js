import React from "react";
import "./class3.css";

export default class Styling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: "10"
    }
  }

  getContent = () => {
    if(this.state.userType === "10"){
      return("Welcome 10");
    }else{
      return("Welcome 1");
    }
  }

  render() {
    return (
      <div>
        <div
          className="mydiv"
          style={{
            color: "red",
            // backgroundColor: "green",
            textAlign: "center",
            height: 200
          }}
        >
          React is awesome
        </div>
        
        {/* if-else */}
        {this.state.userType === 10 ? "welcome admin" : "Welcome user"}

        {/* if  */}
        {this.state.userType === true && "Welcome back"}
        
        {this.getContent()}

        <button
          onClick={this.handleClick}
        >
          Click me
        </button>
      </div>
    )
  }
}