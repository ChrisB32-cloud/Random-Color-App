import React, { Component } from 'react';
import ColorComp from './ColorComp';

class RandomColor extends Component {
  static defaultProps = {
    colorOption: [
      'blue',
      'brown',
      'teal',
      'aliceblue',
      'aqua',
      'darkcyan',
      'darkslategray',
      'slategray',
      'lightslategrey'
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      myColor: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  randColor(curColor) {
    let setColor = Math.floor(Math.random() * this.props.colorOption.length);
    return {
      myColor: this.props.colorOption[setColor]
    };
  }

  handleClick() {
    this.setState(this.randColor);
  }

  render() {
    return (
      <div>
        <h1>Random Color Component</h1>
        {this.props.colorOption.map((c, idx) => (
          <ColorComp
            func={this.handleClick}
            key={idx}
            boxCol={c}
            track={idx}
            stateCol={this.state.myColor}
          />
        ))}
      </div>
    );
  }
}

export default RandomColor;
