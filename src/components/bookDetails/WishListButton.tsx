'use client';

import React, { useContext } from 'react';
import { IBook } from '@/src/types/books.types';
import { BooksContext } from '@/src/context/BooksContext';
import { toast } from 'react-toastify';


const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    console.log('Read button triggered:', book);

    const alreadyAdded = wishlist.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyAdded) {
      alert(`'${book.bookName}' is already in your wishlist`);
      return;
    }

    setWishlist([...wishlist, book]);

    toast.success(`You have added'${book.bookName}' to your wishlist`);
  };
console.log(wishlist)
  return (
    <button
      className="btn btn-primary px-8 rounded-full"
      onClick={handleAddToWishlist}
    >
      WishListButoon
    </button>
  );
};

export default WishListButton;