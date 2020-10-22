import React from "react";
import {
  BrowserRouter,
  Link,
  Route
} from "react-router-dom";
import Login from "../classes/login";
import Class3 from "../classes/class3";
import Class4 from "../classes/class4";
import Async from "../classes/async";
import {
  Grid
} from "@material-ui/core";

export default class Router extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <BrowserRouter>
          <Async />

            <Link to="login">
              <button>
                Login
              </button>
            </Link>
            <Link to="getdata">
              Get data
            </Link>
            <Route exact path="/" component={Class4} />
            <Route path="/login" component={Login} />
            <Route path="/getdata" component={Class3} />
          </BrowserRouter>
        </Grid>
      </Grid>
    )
  }
}