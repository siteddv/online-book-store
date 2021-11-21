import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
   console.log(filterBy);
   switch (filterBy) {
      case 'price_high':
         let res = orderBy(books, 'price', 'desc');
         return res;
      case 'price_low':
         let res1 = orderBy(books, 'price', 'asc');
         return res1;
      case 'author':
         let res2 = orderBy(books, 'author', 'asc');
         return res2;
      default:
         console.log('def');
         return books;
   }
};

const mapStateToProps = (state) => {
   let res = {
      books: sortBy(state.booksReducer.items, state.filterReducer.filterCriteria),
      isReady: state.booksReducer.isReady
   };
   console.log(res);
   return res;
}

const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);