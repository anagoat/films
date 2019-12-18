import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Films.scss';

class Films extends Component {
    constructor(props) {
        super(props); 

        this.state = {};
        
        const selectedCategory = this.props.match.params.selectedCountry;
        console.log('[this.props.selectedCategory]', this.props.selectedCategory);
    }

    render() {
        return (
            <div className="Films">
                
            </div>
        );
    }
}

Films.propTypes = {
    
};

export default Films;