import React, { Component } from 'react';
import '../css/CardSection.css';

class CardSection extends Component {
  render() {
    return (
        <div id="card-section" className="pure-u-1-1">
        	{this.props.children}
        </div>
    );
  }
}

export default CardSection;
