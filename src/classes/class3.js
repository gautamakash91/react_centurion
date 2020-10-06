import React from "react";

export default class Class3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "Akash",
      arr: ["Car", "Bike", "Truck"],
      arr2: [
        {
          name: "Akash",
          age: 29,
          address: "Bangalore"
        },
        {
          name: "Saras",
          age: 30,
          address: "Chennai"
        }
      ]
    }
  }

  handleAdd = () => {
    var temp = this.state.arr2;
    temp.push({
      name: "Gagan",
      age: 26,
      address: "Bhubaneswar"
    });

    this.setState({
      arr2: temp
    })
  }

  handleDelete = () => {
    var temp = this.state.arr2;
    temp.splice(1,1);
    this.setState({
      arr2: temp
    })
  }

  handleClick = (e, index) => {
    
  }

  render() {
    return (
      <div>
        {this.state.arr2.map((s, index) => (
          <span>
            {s.name} - {s.age} - {s.address}
            <button onClick={(e)=>{ this.handleClick(e, index) }}>
              X
            </button>
            <br />
          </span>
        ))}

        <button onClick={this.handleAdd}>
          add
        </button>
        <button onClick={this.handleDelete}>
          delete
        </button>

      </div>
    )
  }
}