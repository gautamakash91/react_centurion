import React from "react";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null
    }
  }

  //FUNCTION TO FETCH BY USING GET
  // handleData = () => {
  //   fetch("https://reqres.in/api/users/2")
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       console.log(resJson)
  //       this.setState({
  //         name: resJson.data.first_name + " " + resJson.data.last_name,
  //         email: resJson.data.email
  //       })
  //     })
  // }

  // FUNCTION TO FETCH DATA USING POST
  handleData = () => {
    fetch("https://reqres.in/api/users",{
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": "Mintuu",
        "job": "Leader"
      })
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
      })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleData}
        >
          GET DATA
        </button>
        <ol>
          <li>
            {this.state.name} - {this.state.email}
          </li>
        </ol>
      </div>
    )
  }
}