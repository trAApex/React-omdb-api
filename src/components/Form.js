import React from 'react';

import './Form.css';

class Form extends React.Component {
  render() {
    return(
      <div className="box">
        <form className="example" onSubmit={this.props.getMovies}>
          <input className="search-box-input" type="text" name="movie_id" placeholder="Movie name..."/>
          <button className="search-box-button"> Search.. </button>
        </form>
      </div>
    );
  }
};

export default Form;