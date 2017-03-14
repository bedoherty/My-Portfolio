import React, { Component } from 'react';
import '../css/Splash.css';
import Scroll from 'react-scroll';
import MediaQuery from 'react-responsive';

var scroller = Scroll.scroller;

class Splash extends Component {
  render() {
    return (
        <div id="splash" className="pure-g">
			<div className="pure-u-1-1 top-section">
				<div className="top-overlay"></div>
				<div className="top-content">
					<h1 id="page-header">Brian Doherty</h1>
					<h2 id="subheader-1">Professional Software Developer</h2><br />
					<h2 id="subheader-2">Amateur Gamer</h2><br />
					<h2 id="subheader-3">Wannabe Chef</h2><br />
				</div>
				<i id="indicate-more" className="fa fa-caret-down fa-5x faa-bounce animated" aria-hidden="true" onClick={this.scrollToContent}></i>
			</div>
		</div>
    );
  }

  scrollToContent() {
  	scroller.scrollTo('content', {
	  duration: 1500,
	  delay: 100,
	  smooth: true
	});
  }
}

export default Splash;
