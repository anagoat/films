import React, { Component } from 'react';
import Startpage from './components/Startpage/Startpage';


import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
        muvies: ''
    }
    }


    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=bdd7f7a48b658c92664ee36018357c6f&language=ru-RU&page=1')
            .then(response => response.json())
            .then(response => this.setState({ movies: response }));
    }


    render() {
        const   { movies } = this.state;
        return (
            <div className="App">
              <Startpage 
                movies={movies}
              >

              </Startpage>
            </div>
        );
    }
}

export default App;