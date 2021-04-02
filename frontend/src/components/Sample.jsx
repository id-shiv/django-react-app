import React, { Component } from "react";

class Sample extends Component {
  state = {
    name: "Shiv",
    image_url: "https://picsum.photos/200",
  };
  render() {
    // return a REACT \ Virtual DOM element (hence the import React above)
    return (
      // below is called jsx expression, are like JS objects
      <div>
        <img src={this.state.image_url} alt="" />
        <h1>Hello {this.processState()}</h1>
        {/* note: class in HTML is className (class is a reserved keyword in JS) */}
        <span className="badge badge-secondary m-2">Badge</span>
        <button className="btn btn-primary btn-sm m-2">Button</button>
      </div>
    );
  }

  processState() {
    // this indicates the class Sample methods and properties
    const { name } = this.state; // retrieve the property from the state of this class
    // <condition> ? return this if true : return this if false
    return name === "Shiv" ? <h5>Shiv</h5> : <h5>Unknown</h5>;
  }
}

export default Sample;
