import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      //div is the container for the react application (but we don't want multiple divs)
      //so use React.fragment
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
      /* this is a JSX expression, NOT returning a string
      JSX unable to render 2 elements h1 and button together
      so must wrap in a div element
      */
    );
  }
}

export default Counter;
