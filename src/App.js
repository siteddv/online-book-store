import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';

class App extends Component {
  render() {
    const { books } = this.props.booksReducer;
    const { setBooks } = this.props;
    const newBooks = [
      {
        id: 0,
        title: 'Shopping Cart ' + new Date()
      }
    ];
    return (
      <div>
        <h1>{books[0].title}</h1>
        <button onClick={setBooks.bind(this, newBooks)}>Set new book</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
