import React, { Component } from 'react';
import '../css/ContentRow.css';
import Scroll from 'react-scroll';
import MediaQuery from 'react-responsive';

var Element    = Scroll.Element;

class ContentRow extends Component {
  render() {
    return (
        <div className="pure-u-1-1 content-row">
            <Element name={this.props.scrollId} />
            <MediaQuery query='(max-width: 768px)' className="pure-g">
                <div className="pure-u-1-8" />
                <div className="pure-u-7-8">
                    <div className="pure-g">
                        <div className="pure-u-23-24 content-row-header">{this.props.title}</div>
                        <div className="pure-u-1-24" />
                    </div>
                    {this.props.children}
                </div>
            </MediaQuery>
            <MediaQuery query='(min-width: 769px)' className="pure-g">
                <div className="pure-u-1-5" />
                <div className="pure-u-1-5">
                    <img className="content-icon" alt="ERROR" src={this.props.iconSource}/>
                </div>
                <div className="pure-u-3-5">
                    <div className="pure-g">
                        <div className="pure-u-23-24 content-row-header">{this.props.title}</div>
                        <div className="pure-u-1-24" />
                    </div>
                    {this.props.children}
                </div>
            </MediaQuery>
        </div>
    );
  }
}

export default ContentRow;
