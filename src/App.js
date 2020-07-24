import React from 'react';

import Form from './components/Form';
import MovieList from './components/MovieList';

import './App.css';

const API_KEY = 'your-private-key';

class App extends React.Component {

  state = {
    all: [],
    error: '',
    search: '',
    poster: ''
  }

  getMovies = (e) => {
    e.preventDefault();
    const movie_id = e.target.elements.movie_id.value;
    console.log(movie_id);
    const url = `http://www.omdbapi.com/?s=${movie_id}&apikey=${API_KEY}`;
    fetch(url)
    .then((res) => res.json())
    .then((res) => res.Search
      .map((item) => item.imdbID)
      .map((id) => fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)))
    .then((promises) => Promise.all(promises))
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then(
      (res) => 
      this.setState({
        all: res,
        error: '',
      }))
    .catch(
      (err) => {
        this.setState({
          all: [],
          search: movie_id,
          error: 'This title is invalid, please try other title'
        })
      });
    }

  render() {
    return(
      <div className="content">
        <Form getMovies={this.getMovies} />
        <MovieList
          all={this.state.all}
          error={this.state.error}
          search={this.state.search}
        />
      </div>
    );
  }
};

export default App;