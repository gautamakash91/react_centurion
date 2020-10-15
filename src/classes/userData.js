import {
  List,
  CircularProgress,
  Dialog,
  DialogContent
} from "@material-ui/core";
import React from "react";

// var a = {
//   ad: {
//     company: "StatusCode Weekly", 
//     url: "http://statuscode.org/", 
//     text: "A weekly newsletter focusing on software developme…server, performance, and the stack end of things."
//   },
//   page: 2,
//   per_page: 6,
//   total: 12,
//   total_pages: 2
// }


export default class UserData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  //FUNCTION TO FETCH BY USING GET
  getData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
        this.setState({
          data: resJson.data
        })
      })
  }


  render() {
    return (
      <div>
        <button
          onClick={this.getData}
        >
          Get Data
        </button>
        {/* <List>
          {this.state.data.map((s, index) => {
            return (
              <ListItem>

              </ListItem>
            )
          })}
        </List> */}

        <Dialog
          open={true}
        >
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}