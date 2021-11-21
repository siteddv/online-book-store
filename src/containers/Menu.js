import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Menu from '../components/MenuComponent';

const mapStateToProps = ({ cartReducer }) => ({
   totalPrice: cartReducer.items.reduce((total, book) => total + book.price, 0),
   count: cartReducer.items.length
})

const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);