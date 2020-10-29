import { Button, TextField } from "@material-ui/core";
import React from "react";
import {
  Redirect
} from "react-router-dom";

export default class Comp1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 0,
      redirect: false
    }
  }

  handleCheck = () => {
    this.setState({
      redirect: parseInt(this.state.val) % 2 === 0 ? true : false
    })
  }

  render() {
    
    if (this.state.redirect === true) {
      return <Redirect to="/two" />
    }

    return (
      <div>
        hello from comp 1

        <TextField
          variant="outlined"
          margin="dense"
          value={this.state.val}
          onChange={(e) => { this.setState({ val: e.target.value }) }}
        />
        <Button
          onClick={this.handleCheck}
        >
          Check
        </Button>
      </div>
    )
  }
}