import React, { Component } from 'react';
import '../css/Header.css';

import Scroll from 'react-scroll';

var scroller = Scroll.scroller;

class Header extends Component {
  render() {
    return (
        <div className="pure-g header" style={{backgroundColor: "rgba(100,149,237, " + this.props.headerOpacity.toString() + ")"}}>
            <div className="pure-u-1-5">
            </div>
            <div className="pure-u-4-5">
                <ul className="navbar-menu">
                    <li onClick={this.scrollTo1}>Home</li>
                    <li onClick={this.scrollTo2}>Work Experience</li>
                    <li onClick={this.scrollTo3}>My Work</li>
                    <li onClick={this.scrollTo4}>My Skills</li>
                    <li onClick={this.scrollTo5}>About</li>
                </ul>
            </div>
        </div>
    );
  }

  scrollTo1() {
    scroller.scrollTo('home', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }

  scrollTo2() {
    scroller.scrollTo('work-experience', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  }

  scrollTo3() {
    scroller.scrollTo('my-work', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  }

  scrollTo4() {
    scroller.scrollTo('my-skills', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }

  scrollTo5() {
    scroller.scrollTo('about-site', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }
}

export default Header;
