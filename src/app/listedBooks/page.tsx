'use client';

import BookCard from "@/src/components/shared/BookCard";
import ListedBook from "@/src/components/shared/ListedBooksCard";
import ListedBooksCard from "@/src/components/shared/ListedBooksCard";
import { BooksContext } from "@/src/context/BooksContext";
import { IBook } from "@/src/types/books.types";
import { useContext } from "react";
import { IoBook } from "react-icons/io5";

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);

    return (
       
       
       <div className="container mx-auto py-5">

            {/* Page Title */}
            <h2 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
                Listed Books
            </h2>

            {/* Tabs */}
            <div className="tabs tabs-lift">

                {/* Read Books Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length})`}
                />

               <div className="tab-content bg-base-100 border-base-300 p-6">

    {readBooks.length > 0 ? (

        <div className="flex flex-col gap-6">

            {readBooks.map((book: IBook) => (
                <ListedBook key={book.bookId} book={book} />
            ))}

        </div>

    ) : (

        <p className="text-center text-lg font-semibold">
            No Read Books Found
        </p>

    )}

</div>

                {/* Wishlist Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Wishlist Books (${wishlist.length})`}
                    defaultChecked
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {wishlist.length > 0 ? (
                        
                        <div className="flex flex-col gap-6">

                            {wishlist.map((book: IBook) => (
                                <ListedBook
                                    key={book.bookId}
                                    book={book}
                                />
                            ))}

                        </div>
                    ) : (
                        <p className="text-center text-lg font-semibold">
                            No Wishlist Books Found
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
};

export default ListedBooks;