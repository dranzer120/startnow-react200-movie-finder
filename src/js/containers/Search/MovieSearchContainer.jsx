import React from "react";
import { updateMovieTitle } from "./searchActions";
import { updateInput } from "./searchActions";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateInput(value));
  }
  handleClick1(event) {
    const { dispatch, input } = this.props;
    dispatch(updateMovieTitle(input));
  }

  render() {
    const { resultList, input } = this.props;
    return (
      <div className="container">
        <h1 id="title">Movie Finder</h1>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Movie..."
            value={input}
            onChange={this.handleInput}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.handleClick1}
            >
              Go
            </button>
          </span>
        </div>
          {
            resultList.map((list) => (
            <div className="card border-primary" key={list.imdbID}>
              <div className="card-body">
                <img
                className="card-img-left img-responsive"
                src={list.Poster}
                alt="Card image"
                />
                <h3 className="card-title">{list.Title}</h3>
                <p className="card-text">{list.Year}</p>
                <hr />
                <a id="button" href={`#/movie/${list.imdbID}`} className="btn btn-primary">
                  More Information
                </a>
              </div>
            </div>
          ))
          }
      </div>
    );
  }
}

export default MovieSearchContainer;
