'use client';

import { IBook } from '@/src/types/books.types';
import React, { useContext } from 'react';
import Books from '../homepage/Books';
import { BooksContext } from '@/src/context/BooksContext';
import { toast } from 'react-toastify';

const RaedButton = ({book}:{book:IBook}) => {


  const{readBooks,setReadBooks} = useContext(BooksContext)
  // console.log(booksProvider,"booksProvider")


  const handleReadBook = () => {
    console.log('read book btn triggered',book);
setReadBooks([...readBooks,book])
toast.success(`you have read '${book.bookName}'`);

  };

  return (
    <button
      className="btn btn-primary px-8 rounded-full"
      onClick={handleReadBook}
    >
      Read
    </button>
  );
};

export default RaedButton;