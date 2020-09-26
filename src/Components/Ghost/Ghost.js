import React, { Component } from "react";
import { ReactComponent as GhostSvg } from "./ghost.svg";
import "./Ghost.css";

class Ghost extends Component {
  state = {
    direction: "left",
    position: {
      top: 50 * 3,
      left: 50 * 3,
    },
  };

  componentDidMount() {
    this.changeDirectionInterval = setInterval(this.changeDirection, 1000);
    this.moveInterval = setInterval(this.move, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.changeDirectionInterval);
    clearInterval(this.moveInterval);
  }

  changeDirection = () => {
    const arrayOfMovement = ["left", "up", "down", "right"];
    const movement = Math.floor(Math.random() * 4);
    this.setState({ direction: arrayOfMovement[movement] });
  };

  move = () => {
    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;
    const { step, border, size, topScoreBoardHeight } = this.props;
    const { direction } = this.state;

    switch (direction) {
      case "right":
        return this.setState({
          position: {
            top: currentTop,
            left: Math.min(
              currentLeft + step,
              window.innerWidth - border - size
            ),
          },
        });
      case "down":
        return this.setState({
          position: {
            top: Math.min(
              currentTop + step,
              window.innerHeight - border - size - topScoreBoardHeight
            ),
            left: currentLeft,
          },
        });
      case "left":
        return this.setState({
          position: { top: currentTop, left: Math.max(currentLeft - step, 0) },
        });
      case "up":
        return this.setState({
          position: { top: Math.max(currentTop - step, 0), left: currentLeft },
        });
      default:
        return;
    }
  };

  render() {
    const { position } = this.state;
    const { color } = this.props;
    return (
      <div className="ghost" style={position}>
        <GhostSvg className={`ghost-${color}`} />
      </div>
    );
  }
}

Ghost.defaultProps = {
  color: "blue",
  step: 50, // 50px
  size: 50, // ghost size: 50px x 50 px
  // TODO: move to conifg
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Ghost;
