import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import books from './books.json';
import MenuComponent from './components/MenuComponent';
import BookCard from './components/BookCard';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    return setBooks(books);
  }

  render() {
    const { isReady } = this.props;

    return (
      <Container>
        <MenuComponent />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : books.map(book => (<BookCard key={book.id} {...book} />))}
        </Card.Group>
      </Container>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer.items,
    isReady: state.booksReducer.isReady
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setBooks: books => dispatch(setBooks(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
