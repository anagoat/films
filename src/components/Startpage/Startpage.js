import React from 'react';
import './Startpage.css';

const Startpage = ( { movies } ) => {
    let results;
    let backdrop_path;
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    for (let key in movies) { 
         results = movies.results
    }
    console.log('[results]', results);
    for (let key in results) {
        backdrop_path = results[key].backdrop_path
        console.log('[backdrop_path]', backdrop_path);
    }


    return (
        <div className="Startpage">
            <div className='img'>
            <img src={baseUrl + backdrop_path} alt='11' />
            </div>
        </div>
    );
};


export default Startpage;