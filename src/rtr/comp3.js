import React from "react";

export default class Comp3 extends React.Component{

  render(){
    console.log(this.props);
    return(
      <div>
        hello from comp 3
      </div>
    )
  }
}