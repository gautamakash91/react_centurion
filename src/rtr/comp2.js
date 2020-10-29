import {
  Button,
  Menu,
  MenuItem,
  IconButton,
  Icon
} from "@material-ui/core";
import React from "react";

export default class Comp2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchor: null
    }
  }

  handleClick = (e) => {
    this.setState({
      anchor: e.currentTarget,
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      anchor: null,
      open: false
    })
  }

  render() {
    return (
      <div>
        hello from comp 2
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
          style={{ position: "absolute", left: "50%" }}
          startIcon={
          <Icon>
            fingerprint
          </Icon>
          }
        >
          Hello world
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchor}
          keepMounted
          open={this.state.open}
          onClose={this.handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    )
  }
}