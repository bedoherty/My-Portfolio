import React, { Component } from 'react';
import '../css/SkillList.css';

class SkillList extends Component {
  render() {
    return (
        <div className="pure-u-7-24 skill-list">
            <h1>{this.props.skillLevel}</h1>
            {this.props.skills.map((skill) =>
                <h2>-{skill}</h2>
            )}
        </div>
    );
  }
}

export default SkillList;
