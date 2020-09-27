import React, { Component } from "react";
import "./Food.css";

class Food extends Component {
  state = {
    position: {
      top: this.props.position.top,
      left: this.props.position.left,
    },
    hidden: false,
  };

  ate() {
    this.setState({hidden: true})
  }

  render() {
    const { position, hidden } = this.state;
    return (
      <div style={position} className={hidden ? "food hidden" : "food"}>
        <div className="food-dot"></div>
      </div>
    );
  }
}

Food.defaultProps = {
  foodSize: 50,
  position: {
    top: 0,
    left: 0,
  },
};

export default Food;
