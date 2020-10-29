import React from "react";
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";
import {
  Button
} from "@material-ui/core";

export default class Router extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoggedin === false ?
          <BrowserRouter>
            <Route exact path="/" component={Comp1} />
            <Route path="/two" component={Comp2} />


            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                Comp 1
              </Button>
            </Link>

            <Link to="/two">
              <Button variant="contained" color="secondary">
                Comp 2
            </Button>
            </Link>
            {this.state.isLoggedin === true &&
              <Link
                to={{
                  pathname: "/three",
                  state: {
                    a: 10
                  }
                }}
              >
                <Button variant="contained" color="secondary">
                  Comp 3
                </Button>
              </Link>
            }
          </BrowserRouter>
          :
          <BrowserRouter>
            <Route exact path="/" component={Comp1} />
            <Route path="/three" component={Comp3} />
            <Link to="/">
              <Button variant="contained" color="secondary">
                Comp 1
            </Button>
            </Link>

            <Link to="/two">
              <Button variant="contained" color="secondary">
                Comp 2
              </Button>
            </Link>
            {this.state.isLoggedin === true &&
              <Link
                to={{
                  pathname: "/three",
                  state: {
                    a: 10
                  }
                }}
              >
                <Button variant="contained" color="secondary">
                  Comp 3
                </Button>
              </Link>
            }
          </BrowserRouter>
        }
      </div>
    )
  }
}