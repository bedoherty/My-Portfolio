import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="pure-u-1-1 footer">
            <h3>
                Copyright © 2017 Brian Doherty
            </h3>
            <h3>
                Iconography by <a href="http://www.flaticon.com/authors/freepik">Freepik</a> from Flaticon
            </h3>
        </div>
    );
  }
}

export default Footer;
