import React, { Component } from 'react';
import '../css/Window.css';

import Splash from './Splash';
import Content from './Content';
import ContentRow from './ContentRow';
import Footer from './Footer';

import boss from "../assets/img/boss.svg";
import resume from "../assets/img/resume.svg";
import laptop from "../assets/img/laptop.svg";

class Window extends Component {
  render() {
    return (
        <div>
        	<Splash />
        	<Content>
        		<ContentRow title="About Me" iconSource={boss}>
                </ContentRow>
                <ContentRow title="Work Experience" iconSource={resume}>
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <h1>Junior Software Engineer</h1>
                            <h2>Intelligent Medical Objects</h2>
                            <h2>Jan 2016 - Present</h2>
                            <p>Using any necessary technology to solve whatever business/healthcare problems are thrown my way. Primarily building web applications and sales demos.</p>
                        </div>
                        <div className="pure-u-1-1">
                            <h1>Software Engineering Intern</h1>
                            <h2>Intelligent Medical Objects</h2>
                            <h2>Jun 2013 - Jan 2016</h2>
                            <p>Develop strategic mobile applications as well as web applications and utilities.</p>
                        </div>
                        <div className="pure-u-1-1">
                            <h1>IT Intern/Technical Consultant</h1>
                            <h2>EnterpriseWorks</h2>
                            <h2>Jun 2012 - Aug 2012</h2>
                            <p>Served as IT staff and support as well as a technical consultant to start up companies in the incubator. Provided services ranging from writing code for MSP430 microcontrollers to creating websites. Also developed the UIUC Research Park Android App.</p>
                        </div>
                    </div>
                </ContentRow>
                <ContentRow title="My Work" iconSource={laptop}>
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <h2>Most of my work can be found on <a href="http://github.com/bedoherty">my github page</a>, however I've highlighted two of my favorite personal projects below.</h2>
                        </div>
                    </div>
                </ContentRow>
                <Footer />
        	</Content>
        </div>
    );
  }

  componentDidMount() {
  }
}

export default Window;
