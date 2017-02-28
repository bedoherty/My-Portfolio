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
        		<ContentRow title="About Me" iconSource={boss}/>
                <ContentRow title="My Resume" iconSource={resume}/>
                <ContentRow title="My Work" iconSource={laptop}/>
                <Footer />
        	</Content>
        </div>
    );
  }

  componentDidMount() {
  }
}

export default Window;
