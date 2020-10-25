import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  }; //state is an object that has properties or data that the component needs

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
      /* this is a JSX expression, NOT returning a string
      JSX unable to render 2 elements h1 and button together
      so must wrap in a div element.

      div is the container for the react application (but we don't want multiple divs)
      so use React.Fragment.

      You can write any expression within the <span> curly brackets when choosing not to hardcode
      
      Set image attribute dynamically
      Curly braces render values dynamically

      Sometimes best to use classes for performance and maintainability
      - sometimes you can apply style attribute to a specific element
      */
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    //JSX expression get compiled to React elements
    //JSX expressions are like JavaScript objects
    //can change String to an expression
    //return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
