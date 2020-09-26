import React, { Component } from "react";
import { ReactComponent as PacmanSvg } from "./pacman.svg";
import "./Pacman.css";

class Pacman extends Component {
  state = {
    direction: "right",
    position: {
      top: 50,
      left: 50,
    },
  };
  constructor(props) {
    super(props);
    this.pacmanRef = React.createRef();
  }

  componentDidMount() {
    this.pacmanRef.current.focus();
  }

  handleKeyDown = e => {
    console.log(e.keyCode, e.key);
  };

  render() {
    const { direction, position } = this.state;
    return (
      <div
        ref={this.pacmanRef}
        className={`pacman pacman-${direction}`}
        tabIndex="0"
        style={position}
        onKeyDown={this.handleKeyDown}
      >
        <PacmanSvg />
      </div>
    );
  }
}

Pacman.defaultProps = {
  step: 50, // 50px
  size: 50, // pacman size: 50px x 50 px
  // TODO: move to conifg
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Pacman;
