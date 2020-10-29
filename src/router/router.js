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
  AppBar,
  Grid,
  Toolbar,
  Button
} from "@material-ui/core";

export default class Router extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      a: null
    }
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <input 
            style={{marginTop: 100}}
            onChange={(e)=>{
              this.setState({
                a: e.target.value
              })
            }}
          />
          <Login 
            x={this.state.a}
          />
          {/* <BrowserRouter>
            <AppBar>
              <Toolbar>
                <Link to="/">
                  <Button>
                    home
                  </Button>
                </Link>

                <Link 
                  to={{
                    pathname: "login",
                    state: {
                      x: this.state.a
                    }
                  }}
                >
                  <Button>
                    Login
                  </Button>
                </Link>

                <Link to="getdata">
                  <Button>
                    Get data
                  </Button>
                </Link>
              </Toolbar>
            </AppBar>
            <div style={{marginTop: 80}}>
            <Route exact path="/" component={Class4} />
            <Route path="/login" component={Login} />
            <Route path="/getdata" component={Class3} />
            </div>
          </BrowserRouter> */}
        </Grid>
      </Grid>
    )
  }
}