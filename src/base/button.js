import React, { Component } from 'react';
import Image from 'react-image-resizer';

// --------Import other components here---------
require('../../style/style.css');
// ---------------------------------------------

export class Profile_Button extends Component {
    constructor(props) {
        super(props);

        this.state= {}
    }    
    
    render() {
        return (
            <input
                className={'round-image'}
                type="image"
                src={'../../img/profile_pic.jpg'}
                />
        );
    }
}
