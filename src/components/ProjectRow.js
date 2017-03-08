import React, { Component } from 'react';
import '../css/ProjectRow.css';

class ProjectRow extends Component {
  render() {
    return (
        <div className="pure-u-3-5 project-row">
            <h1>{this.props.projectTitle}</h1>
            <h2>{this.props.projectSubtitle}</h2>
            <h2>{this.props.projectDate}</h2>
            <p>{this.props.projectDescription}</p>
            {this.props.relevantLinks.map((obj) =>
                <a target="_blank" href={obj.value}><p>{obj.key}</p></a>
            )}
        </div>
    );
  }
}

export default ProjectRow;
