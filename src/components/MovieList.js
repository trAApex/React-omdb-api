import React, { Component } from 'react';
import Movie from './Movie';

import './MovieList.css';

class MovieList extends Component {

  render() {
    return (
      <div className="container">
        <div className="container_two">
          { 
            this.props.error && 
              <span className="error">
                <p className="search"> 
                  { this.props.search } 
                </p> 
                { this.props.error } 
              </span>
          }
          {
            this.props.all.map((element, i) => {
              return (
                <Movie 
                  key={i}
                  imdbID={element.imdbID}
                  poster={element.Poster}
                  title={element.Title}
                  released={element.Released}
                  plot={element.Plot}
                  director={element.Director}
                  actors={element.Actors}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default MovieList;