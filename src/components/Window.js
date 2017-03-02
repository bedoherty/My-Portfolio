import React, { Component } from 'react';
import '../css/Window.css';

import Splash from './Splash';
import Content from './Content';
import ContentRow from './ContentRow';
import Footer from './Footer';
import ExperienceRow from './ExperienceRow';
import ProjectRow from './ProjectRow';
import SkillList from './SkillList';

import boss from "../assets/img/boss.svg";
import resume from "../assets/img/resume.svg";
import laptop from "../assets/img/laptop.svg";
import toolbox from "../assets/img/toolbox.svg";
import browser from "../assets/img/browser.svg";

class Window extends Component {
  render() {
    return (
        <div>
        	<Splash />
        	<Content>
        		<ContentRow title="About Me" iconSource={boss}>
                    <div className="pure-g prelude">
                        <div className="pure-u-3-5">
                            <h2>Insert awkward personal bio here</h2>
                        </div>
                    </div>
                </ContentRow>
                <ContentRow title="Work Experience" iconSource={resume}>
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
                <ContentRow title="My Work" iconSource={laptop}>
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
                <ContentRow title="My Skills" iconSource={toolbox}>
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
                <ContentRow title="About This Site" iconSource={browser}>
                    <div className="pure-g prelude">
                        <div className="pure-u-3-5">
                            <h2>Built on React JS and stuff</h2>
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
