import React, { Component } from 'react';
import Startpage from './Startpage/Startpage';
import { Route, Switch, withRouter } from 'react-router-dom';



import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
        movies: ''
    }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=bdd7f7a48b658c92664ee36018357c6f&language=ru-RU&page=1')
            .then(res => res.json())
            .then(response => this.setState({ movies: response.results }));
    }

    render() {
        console.log('[this.state.movies]', this.state.movies);
        return (
            <div className="App">
            <Route path="/" exact render={props => (
                        <Startpage
                            {...props}
                            movies={this.state.movies}
                        />
                    )} />
            </div>
        );
    }
}

export default App;