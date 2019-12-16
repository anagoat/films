import React, { Component } from 'react';
import './Startpage.css';
import StartMovie from './StartMovie/StartMovie';

class Startpage extends Component {
    constructor(props){
    super(props);

    this.state = {}
    }

    render() {
        const { movies } = this.props;
        let movie = Array.from(movies);
        console.log('[movie]', movie);
        const a = movie.map(elem => (
            <StartMovie
                key={elem.id}
                poster_path={elem.poster_path}
                overview={elem.overview}
                title={elem.title}
                vote_average={elem.vote_average}

            />
            )  
        )

        return (
            <div className="Startpage">
                {a}
            </div>  
        );
    }
}

export default Startpage;