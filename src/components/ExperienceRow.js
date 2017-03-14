import React, { Component } from 'react';
import '../css/ExperienceRow.css';
import MediaQuery from 'react-responsive';

class ExperienceRow extends Component {
  render() {
    return (
        <div className="pure-u-md-3-5 pure-u-4-5  experience-row">
            <h1>{this.props.jobTitle}</h1>
            <h2>{this.props.employer}</h2>
            <h2>{this.props.employmentPeriod}</h2>
            <p>{this.props.jobDescription}</p>
        </div>
    );
  }
}

export default ExperienceRow;
