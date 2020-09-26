import React, { Component } from "react";
import { ReactComponent as GhostSvg } from "./ghost.svg";
import "./Ghost.css";

class Ghost extends Component {
  state = {
    direction: 'left',
    position: {
      top: 50 * 3,
      left: 50 * 3,
    },
  };
  constructor(props) {
    super(props);
    this.pacmanRef = React.createRef();
  }
  render() {
    const { color, position } = this.state;
    return (
      <div
        className="ghost"
        style={position}
      >
        <GhostSvg className={`ghost-${color}`} />
      </div>
    );
  }
}

Ghost.defaultProps = {
  color: "red",
  step: 50, // 50px
  size: 50, // ghost size: 50px x 50 px
  // TODO: move to conifg
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Ghost;
