import MovieSearchContainer from './MovieSearchContainer';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        resultList: store.search.resultList,
        input: store.search.input
    }
}

export default connect(mapStoreToProps)(MovieSearchContainer);