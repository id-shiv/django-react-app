import React, { Component } from "react";

import ExampleComponent from "./ExampleComponent";

class ExampleComponentList extends Component {
  // PROPERTIES
  state = {
    examples: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 6 },
      { id: 4, value: 0 },
    ],
  };

  // PROPS VS STATE
  // PROPS:
  //    - Data passed by parent component.
  //    - Cannot be modified. If needed to be modified, assign it to state.
  // STATE:
  //    - Data local to the component.
  //    - Can be modified using setState() function.
  //    - Should be modified only by the component holding it.
  //      If required to be modified from child components, raise events.

  render() {
    return (
      <div>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>

        {/* for every example in examples */}
        {this.state.examples.map((example) => (
          // PASSING ARGUMENTS TO CHILD COMPONENTS
          // Except for key properties all other passed properties
          // can be accessed in ExampleComponent class by using this.props properties
          <ExampleComponent
            key={example.id}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            // id={example.id}
            // value={example.value}
            // selected={true}
            // Instead of passing the properties of same state property as multiple, and
            // To avoid changing this code to add another property let us pass as below
            example={example} // pass the mapped object
          >
            {/* PASSING CHILDREN TO CHILD COMPONENTS */}
            <h1>CHILD FROM EXAMPLE LIST WITH AN ID: {example.id}</h1>
          </ExampleComponent>
        ))}
      </div>
    );
  }

  // handle function takes e as an argument from the inline function set for onClick property of the button
  handleReset = () => {
    // note, class propertes are not accessible within this function
    // solution:
    // 1. bind the properties to access them in constructor
    // 2. use arrow functions instead of constructors as current

    // setting state property is not possible directly as below in REACT
    // this.state.count += 1
    // Instead use setState() method from Component class
    // setState() method does a async call to render method,
    // detects the change in virtual DOM and only modifies the changed element in browser DOM
    const examples = [...this.state.examples]; // clone state to const
    for (const [index] of examples.entries()) {
      examples[index].value = 0;
    }

    this.setState({
      // this will set the value of count property in state if present, create if not present
      examples,
    });
  };

  // handle function takes e as an argument from the inline function set for onClick property of the button
  handleIncrement = (e) => {
    // note, class propertes are not accessible within this function
    // solution:
    // 1. bind the properties to access them in constructor
    // 2. use arrow functions instead of constructors as current
    console.log(
      "Raising button click handler from EXAMPLE COMPONENT id:",
      e.id
    );

    // setting state property is not possible directly as below in REACT
    // this.state.count += 1
    // Instead use setState() method from Component class
    // setState() method does a async call to render method,
    // detects the change in virtual DOM and only modifies the changed element in browser DOM
    const examples = [...this.state.examples]; // clone state to const
    const indexOfExample = examples.indexOf(e);
    examples[indexOfExample] = { ...e };
    examples[indexOfExample].value++;

    this.setState({
      // this will set the value of count property in state if present, create if not present
      examples,
    });
  };

  // MODIFY COMPONENT STATE FROM CHILD COMPONENT
  // Example of event handler to be raised by child component to modify state of parent class
  handleDelete = (e) => {
    console.log("Raising event handler from EXAMPLE COMPONENT id:", e.id);

    // Remove an example matching this id on calling this handler
    const examples = this.state.examples.filter((c) => c.id !== e.id);
    // Need not use as this.setState({ examples: examples}) since state property and const are same name
    this.setState({ examples });
  };
}
export default ExampleComponentList;
