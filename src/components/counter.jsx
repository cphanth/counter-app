import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  }; //state is an object that has properties or data that the component needs

  //helper method
  //if empty, returns a paragraph
  //default return ul
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement() {
    console.log("Increment Clicked");
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
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

      Can also utilize in-line style attributes
      */
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
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
