import React from 'react';
// import PropTypes from 'prop-types';

import './StartMovie.css';

const StartMovie = ({ poster_path, overview, title, vote_average  }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    console.log('[poster_path]', poster_path);
    // overview описание
    // title название
    // vote_average оценка

    return (
        <div className="StartMovie">
            <div className="MovieContent">
                <h2>{title}</h2>
                <img src={baseUrl + poster_path} alt='11' />
                <p>{overview}</p>
            </div>
        </div>
    );
};

// StartMovie.propTypes = {
    
// };

export default StartMovie;