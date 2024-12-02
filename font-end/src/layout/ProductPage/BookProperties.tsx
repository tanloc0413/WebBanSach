import React from 'react';
import Book from '../../models/Book';

interface BookProperties {
  books: Book;
}

const BookProperties: React.FC<BookProperties> = ({books}) => {
  return (
    <div>
      
    </div>
  )
}

export default BookProperties;