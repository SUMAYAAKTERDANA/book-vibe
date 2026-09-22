// import React from 'react';

'use client';

import { BooksContext } from "@/src/context/BooksContext";
import { useContext } from "react";

const ListedBooks = () => {
const {readBooks,wishlist}=useContext(BooksContext)
console.log(readBooks,wishlist,"readBooks",'wishlist')

    return (
    <div> Listed Books | Total Read books:{readBooks.length} <br/> |Total Wishlist books:{wishlist.length}

    </div> );
};

export default ListedBooks;