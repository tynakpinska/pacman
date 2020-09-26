import React, { Component } from "react";
import { ReactComponent as PacmanSvg } from "./pacman.svg";
import "./Pacman.css";

class Pacman extends Component {
  state = {
    direction: "right",
    position: {
      top: 0,
      left: 0,
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
    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;
    const { step, border, size, topScoreBoardHeight } = this.props;

    switch (e.key) {
      case "ArrowRight":
        return this.setState({
          position: {
            top: currentTop,
            left: Math.min(
              currentLeft + step,
              window.innerWidth - border - size
            ),
          },
          direction: "right",
        });
      case "ArrowDown":
        return this.setState({
          position: {
            top: Math.min(
              currentTop + step,
              window.innerHeight - border - size - topScoreBoardHeight
            ),
            left: currentLeft,
          },
          direction: "down",
        });
      case "ArrowLeft":
        return this.setState({
          position: { top: currentTop, left: Math.max(currentLeft - step, 0) },
          direction: "left",
        });
      case "ArrowUp":
        return this.setState({
          position: { top:  Math.max(currentTop - step, 0), left: currentLeft },
          direction: "up",
        });
      default:
        return;
    }
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
