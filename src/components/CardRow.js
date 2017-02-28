import React, { Component } from 'react';
import '../css/CardRow.css';

class CardRow extends Component {
  render() {
    return (
        <div className="pure-g  card-row">
        		{this.props.children}
        </div>
    );
  }
}

export default CardRow;
