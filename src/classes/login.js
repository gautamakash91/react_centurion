import React from "react";
import {
  Button,
  TextField,
  Snackbar,
  Icon,
  IconButton,
  Card,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 1,
      password: "",
      open: false,
      message: ""
    }
  }

  handleLogin = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.password
      })
    }).then(res => res.json())
      .then((resJson) => {
        if (resJson.token) {
          this.setState({
            open: true,
            message: "login successful"
          })
        } else {
          this.setState({
            open: true,
            message: "login unsuccessful"
          })
        }
      })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {


    return (
      <div
        style={{
          background: "url('https://scx2.b-cdn.net/gfx/news/hires/2019/4-space.jpg')",
          height: "100vh",
          backgroundSize: "cover"
        }}
      >
        <Grid container justify="center">
          <Grid item xs={12} md={4}>
            <Card style={{ marginTop: 250, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5">
                  Login
                </Typography>
                <TextField
                  variant="outlined"
                  label="email"
                  fullWidth
                  color="secondary"
                  value={this.state.email}
                  required={true}
                  onChange={(e) => { this.setState({ email: e.target.value }) }}
                />
                <TextField
                  variant="outlined"
                  label="password"
                  fullWidth
                  color="secondary"
                  type="password"
                  value={this.state.password}
                  required={true}
                  style={{ marginTop: 15, marginBottom: 15 }}
                  onChange={(e) => { this.setState({ password: e.target.value }) }}
                />


                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={(this.state.email === "" || this.state.password === "") ? true : false}
                  onClick={this.handleLogin}
                >
                  Login
                </Button>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={10000}
          onClose={this.handleClose}
          message={this.state.message}
          action={
            <IconButton onClick={this.handleClose}>
              <Icon style={{ color: "white" }}>
                close
              </Icon>
            </IconButton>
          }
        />
      </div>
    )
  }
}