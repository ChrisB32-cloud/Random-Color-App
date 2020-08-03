import React, { Component } from 'react';
import './ColorComp.css';

class ColorComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      compCol: this.props.boxCol
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.func();
    this.setState({ compCol: this.props.stateCol });
  }

  render() {
    return (
      <div
        onClick={this.handleChange}
        className="ColorBox"
        style={{ backgroundColor: `${this.state.compCol}` }}
      >
        Click
      </div>
    );
  }
}

export default ColorComp;
