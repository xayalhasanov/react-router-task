import React, { useContext } from 'react';
import { favoriteContext } from '../../../context/FavoritContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import IconButton from '@mui/material/IconButton';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Col from 'react-bootstrap/Col';

function Favorites() {
  const { favorites, setFavorites } = useContext(favoriteContext);

  function handleDeleteFavorite(id) {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  }

  return (
    <div className="favorites-container">
      {favorites.map((book) => (
        <Col key={book.id} md={4} sm={6} xs={12} className="mb-4">
          <Card style={{ width: '100%' }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/pW4GyuOnzXwnqnOz6gdg4rUXFhHauItOrFPopvvegS0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3Zl/cnMub3BlbmxpYnJh/cnkub3JnL3cvaWQv/MTQ2NTI0NzAtTS5q/cGc"
            />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Author: {book.author}</ListGroup.Item>
              <ListGroup.Item>Page count: {book.pagesCount}</ListGroup.Item>
              <ListGroup.Item>Year: {book.publishedYear}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <IconButton onClick={() => handleDeleteFavorite(book.id)}>
                <DisabledByDefaultIcon />
              </IconButton>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
}

export default Favorites;
