import React, { Component } from 'react';
import '../css/ContentRow.css';
import Scroll from 'react-scroll';
var Element    = Scroll.Element;

class ContentRow extends Component {
  render() {
    return (
        <div className="pure-u-1-1 content-row">
            <Element name={this.props.scrollId} />
        	<div className="pure-g">
        		<div className="pure-u-1-5" />
        		<div className="pure-u-1-5">
        			<img className="content-icon" alt="ERROR" src={this.props.iconSource}/>
        		</div>
        		<div className="pure-u-3-5">
                    <div className="pure-g">
                        <div className="pure-u-23-24 content-row-header">{this.props.title}</div>
                        <div className="pure-u-1-24" />
                    </div>
        			{this.props.children}
        		</div>
        	</div>
        </div>
    );
  }
}

export default ContentRow;
