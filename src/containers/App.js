import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy, searchQuery) => {
   books = books.filter(b =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase())
   );
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
         return books;
   }
};

const mapStateToProps = ({ booksReducer, filterReducer }) => {
   let res = {
      books: booksReducer.items
         && sortBy(booksReducer.items,
            filterReducer.filterCriteria,
            filterReducer.searchQuery),
      isReady: booksReducer.isReady
   };
   return res;
}

const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);