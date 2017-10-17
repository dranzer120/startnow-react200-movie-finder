import React from 'react';
import { updateMovieDetail } from "./detailActions";

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(updateMovieDetail(`${this.props.match.params.id}`))
  } 

  render() {
    const { 
            title,
            year,
            runtime,
            genre,
            plot,
            awards,
            poster,
            metascore,
            imdbrating
          } = this.props;
    return (
      <div className="container">
      
        <div className="row">
          <div className="col-sm-5">
            <img
              className="detail-img img-responsive"
              src={poster}
              alt="Detail image"
            />
          </div>

          <div className="col-sm-7">
            <div className="card border-primary">
              <h4 className="card-header">Movie Detail</h4>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <span className="badge badge-primary">{year}</span>
                <span className="badge badge-primary">{runtime}</span>
                <span className="badge badge-primary">{genre}</span>
                <br/>
                <p>{plot}</p>
                <br/>
                <p>{awards}</p>
                <br/>
                <strong>Metascore:</strong> {metascore}
                <br/>
                <strong>IMDB:</strong> {imdbrating}
              </div>
            </div>
          </div>
        </div>
        <a id="button" href={`#/`} className="btn btn-secondary">
          Go Back
        </a>
      </div>
    );
  }
}

export default MovieDetailContainer