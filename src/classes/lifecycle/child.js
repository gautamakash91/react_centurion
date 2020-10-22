import React from "react";

export default class Child extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      role: 0
    }
  }

  componentDidMount(){
    console.log("from component did mount");
    // this.setState({
    //   la: this.props.vala
    // })
  }

  componentDidUpdate(){
    console.log("from component did update");
    // if(this.props.vala !== this.state.la){
    //   this.setState({
    //     la: this.props.vala
    //   })
    // }
  }

  componentWillUnmount(){
    console.log("from component will unmount");
    fetch("https://reqres.in/api/users/2",{
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": "Mintuu",
        "job": "Developer"
      })
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
      })
  }

  render(){
    console.log("from render")
    return(
      <div>
        Hello from Child

        <input 
          value={this.state.role}
          onChange={(e)=>{
            this.setState({
              role: e.target.value
            })
          }}
        />
      </div>
    )
  }
}