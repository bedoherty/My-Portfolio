import React, { Component } from 'react';
import '../css/Window.css';

import Splash from './Splash';
import Content from './Content';
import ContentRow from './ContentRow';
import Footer from './Footer';
import ExperienceRow from './ExperienceRow';
import ProjectRow from './ProjectRow';
import SkillList from './SkillList';
import Header from './Header';

//  import boss from "../assets/img/boss.svg";
import resume from "../assets/img/resume.svg";
import laptop from "../assets/img/laptop.svg";
import toolbox from "../assets/img/toolbox.svg";
import browser from "../assets/img/browser.svg";

import Scroll from 'react-scroll';
var Element    = Scroll.Element;

class Window extends Component {
    constructor(props) {
        super(props);
        this.state = {headerOpacity: 0};
    }

    render() {
    return (
        <div>
            <Element name="home" />
            <Header headerOpacity={this.state.headerOpacity}/>
        	<Splash />
        	<Content>
        		{/*
                <ContentRow title="About Me" iconSource={boss}>
                    <div className="pure-g prelude">
                        <div className="pure-u-3-5">
                            <h2>Insert awkward personal bio here</h2>
                        </div>
                    </div>
                </ContentRow>
                */}
                <ContentRow title="Work Experience" iconSource={resume} scrollId="work-experience">
                    <div className="pure-g">
                        <ExperienceRow 
                            jobTitle="Junior Software Engineer"
                            employer="Intelligent Medical Objects"
                            employmentPeriod="Jan 2016 - Present"
                            jobDescription="Using any necessary technology to solve whatever business/healthcare problems are thrown my way. Primarily building web applications and sales demos."
                        />
                        <ExperienceRow 
                            jobTitle="Software Engineering Intern"
                            employer="Intelligent Medical Objects"
                            employmentPeriod="Jun 2013 - Jan 2016"
                            jobDescription="Develop strategic mobile applications as well as web applications and utilities."
                        />
                        <ExperienceRow 
                            jobTitle="IT Intern/Technical Consultant"
                            employer="EnterpriseWorks"
                            employmentPeriod="Jun 2012 - Aug 2012"
                            jobDescription="Served as IT staff and support as well as a technical consultant to start up companies in the incubator. Provided services ranging from writing code for MSP430 microcontrollers to creating websites. Also developed the UIUC Research Park Android App."
                        />
                    </div>
                </ContentRow>
                <ContentRow title="My Work" iconSource={laptop} scrollId="my-work">
                    <div className="pure-g">
                        <div className="pure-g prelude">
                            <div className="pure-u-3-5">
                                <h2>Most of my non proprietary work can be found on <a href="http://github.com/bedoherty">my github page</a>, however I've highlighted two of my favorite personal projects below.</h2>
                            </div>
                        </div>
                        <ProjectRow
                            projectTitle="PillPusher"
                            projectSubtitle="Indiana HIMSS FHIR Connectathon"
                            projectDate="April 2016"
                            projectDescription="Together with a couple coworkers I participated in the Indiana HIMSS FHIR Connectathon.  We built out a REST API based server that would sync with FHIR based healthcare servers to retrieve data about a patients medication orders.  The medication information would then be served via REST API, as well as automatically triggering push notifications to a mobile device when it needs to be taken.  We took first place, and I have linked a video of our final presentation.  Apologies for the shaky iPhone recording."
                        />
                        <ProjectRow
                            projectTitle="MagicTCGPriceAPI"
                            projectSubtitle="Personal/Open Source Project"
                            projectDate="2013"
                            projectDescription="This was a project I started way back in 2013 when I was quite  infatuated with Magic the Gathering.  I decided I needed more open access to card information/pricing, so I wrote a Google App Engine python server to scrape data from various websites. (TCGPlayer, Star City Games, etc)  This project was something I sort of just kicked out in a weekend, and then forgot about.  Until one day many months later when I received an issue opened notification, my first on Github.  After determining the error, I was able to figure out that I was actually hitting Google Cloud's free quota daily, something to the tune of 48k requests per day."
                        />
                    </div>
                </ContentRow>
                <ContentRow title="My Skills" iconSource={toolbox} scrollId="my-skills">
                    <div className="pure-g">
                        <SkillList
                            skillLevel="Platforms"
                            skills={["Android", "React Native/React JS", "Django", "Flask", "NodeJS", "Drupal"]}
                        />
                        <SkillList
                            skillLevel="Languages"
                            skills={["C#", "Java", "Python", "Javascript", "PHP", "C++"]}
                        />
                    </div>
                </ContentRow>
                <ContentRow title="About This Site" iconSource={browser} scrollId="about-site">
                    <div className="pure-g prelude">
                        <div className="pure-u-3-5">
                            <h2>This site was a personal project I spun up for several reasons.  First off, I really enjoyed developing in React Native, and wanted more web based React JS experience.  Secondly, I realized I had no good way to present myself/my resume, and wanted to remedy that situation.  And lastly, having worked in the Healthcare IT field for so long, I wanted to prove to myself that I was still capable of using modern web frameworks.</h2>
                        </div>
                    </div>
                </ContentRow>
                <Footer />
        	</Content>
        </div>
    );
    }

    componentDidMount() {
        window.splashHeight = window.innerHeight / 100 * 80;
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        this.setState({headerOpacity: (window.scrollY / window.splashHeight)});
    }
}

export default Window;
