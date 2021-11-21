import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import srcBooks from '../books.json';
import MenuComponent from '../containers/Menu';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';

class App extends Component {
  componentWillMount() {
    const { setBooks, books } = this.props;

    if (books === null)
      return setBooks(srcBooks);

    return setBooks(books);
  }

  render() {
    let { isReady, books } = this.props;
    if (books === null) {
      books = srcBooks;
    }
    return (
      <Container>
        <MenuComponent />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Loading..."
            : books.map(book => (<BookCard key={book.id} {...book} />))}
        </Card.Group>
      </Container>
    );
  };
}

export default App;