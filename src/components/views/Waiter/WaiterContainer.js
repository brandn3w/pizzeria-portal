import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState } from '../../../redux/tablesRedux';


//Container or smart component, connected with store
// has connect function and mapDispatchToProps
const mapStateToProps = (state) => ({
    tables: getAll(state),
    loading: getLoadingState(state),
})

const mapDispatchToProps = (dispatch) => ({
    fetchTables: () => dispatch(fetchFromAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);