'use client';

import ListedBooksCard from "@/src/components/shared/ListedBooksCard";
import { BooksContext } from "@/src/context/BooksContext";
import { IBook } from "@/src/types/books.types";
import { useContext } from "react";

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);

    return (
        <div className="container mx-auto py-5 px-4 max-w-5xl">
            {/* Page Title */}
            <h2 className="my-6 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
                Listed Books
            </h2>

            {/* Tabs */}
            <div role="tablist" className="tabs tabs-bordered justify-start mb-8">
                {/* Read Books Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    role="tab"
                    className="tab tab-lg text-lg font-semibold"
                    aria-label={`Read Books (${readBooks?.length || 0})`}
                    defaultChecked
                />
                <div role="tabpanel" className="tab-content bg-base-100 py-6">
                    {readBooks && readBooks.length > 0 ? (
                        <div className="flex flex-col gap-6">
                            {readBooks.map((book: IBook) => (
                                <ListedBooksCard key={book.bookId} book={book} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-lg font-semibold py-10">
                            No Read Books Found
                        </p>
                    )}
                </div>

                {/* Wishlist Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    role="tab"
                    className="tab tab-lg text-lg font-semibold"
                    aria-label={`Wishlist Books (${wishlist?.length || 0})`}
                />
                <div role="tabpanel" className="tab-content bg-base-100 py-6">
                    {wishlist && wishlist.length > 0 ? (
                        <div className="flex flex-col gap-6">
                            {wishlist.map((book: IBook) => (
                                <ListedBooksCard key={book.bookId} book={book} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-lg font-semibold py-10">
                            No Wishlist Books Found
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;