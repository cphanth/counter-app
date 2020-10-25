import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  }; //state is an object that has properties or data that the component needs
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
      /* this is a JSX expression, NOT returning a string
      JSX unable to render 2 elements h1 and button together
      so must wrap in a div element.
      div is the container for the react application (but we don't want multiple divs)
      so use React.Fragment.
      You can write any expression within the <span> curly brackets when choosing not to hardcode
      Set image attribute dynamically
      Curly braces render values dynamically
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
