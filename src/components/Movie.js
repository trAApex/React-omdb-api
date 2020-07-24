import React, { Component } from 'react';

import './Movie.css';

class Movie extends Component{
  render() {
      const { imdbID, poster, title, released, plot, director, actors } = this.props;
        return(
          <table>
            <tbody>
              <tr className="first">
                <td className="first">
                  <div className="poster">
                    <a href={`http://www.imdb.com/title/${imdbID}`} >
                    <img src={poster === 'N/A' ? require("../img/imgnotfound.jpg") : poster} alt={title} />
                    </a>
                  </div>
                </td>
                  <td className="second">
                    <div>
                      <h4 className="title">
                        <a href={`http://www.imdb.com/title/${imdbID}`} >
                          { title }
                        </a>
                      </h4>
                    </div>
                      <div className="released">
                        <span className="released_date" >
                          { released !== 'N/A' && <span >Released: 
                            <span className="released_time">{ released === 'N/A' ? false : released }</span>
                            </span>  
                          }
                        </span>
                      </div>
                      <div className="plot">
                        { plot === 'N/A' ? false : plot }
                      </div>
                      <div className="author_box">
                        { director !== 'N/A' &&
                          <span className="author" >Director: 
                            <span className="author_name">{ director === 'N/A' ? false : director}</span>
                          </span> 
                        }
                      </div>
                      <div className="actors_box">
                        { actors !== 'N/A' &&
                          <span className="actors">Actors: 
                            <span className="actors_name">{ actors === 'N/A' ? false : actors }</span> 
                          </span> 
                        }
                      </div>
                  </td>
              </tr>
            </tbody>
          </table>
      );          
  }
} 

export default Movie;