import React, { Component } from "react";

class Example extends Component {
  // PROPERTIES
  state = {
    // SET THE STATE DYMANICALLY PASSED BY PARENT ELEMENT
    // Below way has problems
    //  - since count is set with value from PARENT component only when EXAMPLE component is intialized
    //  - when we update value, count will not be updated
    // count: this.props.example.value,
    // USE ONLY THE PROPERTIES THAT ARE CONTROLLED WITHIN THE PROPERTIES
    // WHEN INTERACTING WITH OTHER COMPONENTS:
    //  - RAISE HANDLE EVENT FUNCTIONS to modify state of another component
    //  - USE CONTROLLED DATA to use state of another component using props
  };

  // constructor() {
  //   // call super() before this is accessed
  //   super(); // base constructor

  //   // bind the methods, so that the methods can access class properties
  //   this.handleButtonClick = this.handleButtonClick.bind(this);
  // }

  // RENDER
  render() {
    // return a REACT \ Virtual DOM element (hence the import React above)
    return (
      // RETURN HTML ELEMENT
      // below is called jsx expression, are like JS objects
      <div>
        {/* RENDER CHILD PASSED FROM PARENT */}
        {this.props.children}

        {/* PASS PROPERTIES TO HTML */}
        {/* <h1>Hello {this.processState()}</h1> */}
        {/* PASS CLASS VALUE TO HTML */}
        {/* note: class in HTML is className (class is a reserved keyword in JS) */}
        <span className="badge m-2 badge-success">
          {this.props.example.value === 0 && "Zero"}
          {this.props.example.value > 0 && this.props.example.value}
        </span>

        {/* HANDLE BUTTON CLICKS */}
        {/* handle button clicks with JS methods, note that we are not calling the method, but only passing it */}
        <button
          className="btn btn-primary btn-sm m-2"
          // Call handle functions as below
          // onClick={this.handleButtonClick}

          // MODIFY PARENT COMPONENT STATE
          // Call event handler in parent component to delete this example id
          // onClick={() => this.props.onDelete(this.props.example.id)}
          // PASS DATA TO EVENT HANDLER FUNCTIONS
          // or, use inline function call as below when needed to pass arguments
          onClick={() => this.props.handleIncrement(this.props.example)}
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.handleDelete(this.props.example)}
        >
          Delete
        </button>
        {/* CONDITIONAL RETURN AND HANDLING LIST OF ELEMENTS */}
        {/* conditional rendering example below */}
        {/* in JS, && is possible with boolean, string and integers which returns string when first condition is True */}
        {/* {this.state.tags.length === 0 && "No tags present"}
        {this.state.tags.length > 0 && this.getListElement()} */}
        {/* <img src={this.state.image_url} alt="" /> */}
      </div>
    );
  }

  // getBadgeClass(value) {
  //   let badge_class = "badge m-2 badge-"; // use let keyword since we are modifying

  //   // modify the HTML class based on state property
  //   badge_class += value > 0 ? "success" : "danger";
  //   return badge_class;
  // }

  // processState() {
  //   // this indicates the class Sample methods and properties
  //   const { name } = this.state; // retrieve the property from the state of this class
  //   // <condition> ? return this if true : return this if false
  //   return name === "Shiv" ? <p>Shiv</p> : <p>Unknown</p>;
  // }
  // }
}

export default Example;
