import React from "react";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      keyword: "",
      page: 1
    }
  }

  // FUNCTION TO FETCH DATA USING POST
  componentDidMount = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
        this.setState({
          data: resJson.data
        })
      })
  }


  handleKeyword = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          placeholder="search user"
          onChange={this.handleKeyword}
        />
        <ol>
          {this.state.data.map((s) => (
            <li>
              {s.first_name} - {s.email}
            </li>
          ))}
        </ol>
      </div>
    )
  }
}