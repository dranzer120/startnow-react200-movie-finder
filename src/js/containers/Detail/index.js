import MovieDetailContainer from './MovieDetailContainer';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        title: store.detail.title,
        year: store.detail.year,
        runtime: store.detail.runtime,
        genre: store.detail.genre,
        plot: store.detail.plot,
        awards: store.detail.awards,
        poster: store.detail.poster,
        metascore: store.detail.metascore,
        imdbrating: store.detail.imdbrating
    }
}

export default connect(mapStoreToProps)(MovieDetailContainer);