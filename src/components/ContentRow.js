import React, { Component } from 'react';
import '../css/ContentRow.css';

class ContentRow extends Component {
  render() {
    return (
        <div className="pure-u-1-1 content-row">
        	<div className="pure-g">
        		<div className="pure-u-1-5" />
        		<div className="pure-u-1-5">
        			<img className="content-icon" alt="ERROR" src={this.props.iconSource}/>
        		</div>
        		<div className="pure-u-3-5">
        			<h1>{this.props.title}</h1>
        			<h2>{this.props.content}</h2>
        		</div>
        	</div>
        </div>
    );
  }
}

export default ContentRow;
