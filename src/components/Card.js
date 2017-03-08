import React, { Component } from 'react';
import '../css/Card.css';

class Card extends Component {
  render() {
    return (
        <div className="pure-u-1-3">
			<div className="card">
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		</div>
    );
  }
}

export default Card;
