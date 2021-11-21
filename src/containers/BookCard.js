import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import BookCard from '../components/BookCard';

const mapStateToProps = ({ cartReducer }, { id }) => ({
   addedCount: cartReducer.items.reduce(
      (count, b) => count + (b.id === id ? 1 : 0),
      0
   )
});

const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);