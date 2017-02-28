import React, { Component } from 'react';
import '../css/Content.css';
import Scroll from 'react-scroll';
var Element    = Scroll.Element;

class Content extends Component {
  render() {
    return (
        <div id="content" className="pure-g">
        	<Element name="content" />
        	{this.props.children}
        </div>
    );
  }
}

export default Content;
