import React, { Component } from 'react';

class Columns extends Component {
  render() {

    let columnStyles = {
        columnCount: this.props.total
    }

    return (
      <div className="columns" style={columnStyles}>{this.props.children}</div>
    );
  }
}

export default Columns;
