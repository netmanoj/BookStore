// FeaturedBooks.js
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';


const books = [
  { id: 1, title: 'Rich Dad Poor Dad', imgSrc: '/images/book1.jpg' },
  { id: 2, title: 'Atomic Habbits', imgSrc: '/images/book2.jpg' },
  { id: 3, title: '11 Rules For Life', imgSrc: '/images/book3.jpg' },
  { id: 4, title: 'Verity', imgSrc: '/images/book4.jpg' },
  { id: 5, title: 'Power', imgSrc: '/images/book5.jpg' },
  { id: 6, title: 'Make Epic Money', imgSrc: '/images/book6.jpg' },
  { id: 7, title: 'The Immotals', imgSrc: '/images/book7.png' },
  { id: 8, title: 'A beautiful Mind', imgSrc: '/images/book8.jpg' },
  { id: 9, title: 'Book 9', imgSrc: '/images/book1.jpg' },
  { id: 10, title: 'Book 10', imgSrc: '/images/book1.jpg' },
];

const FeaturedBooks = () => {
  return (
    <Box className="featured-books">
      <Typography variant="h4" component="div" gutterBottom>
        Featured Books
      </Typography>
      <Box className="books-container">
        {books.map((book) => (
          <Card key={book.id} className="book-card">
            <CardMedia
              component="img"
              height="200"
              image={book.imgSrc}
              alt={book.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {book.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedBooks;
