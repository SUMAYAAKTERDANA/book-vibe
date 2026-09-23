

import React from 'react';
import Image from 'next/image';
import { IBook } from '@/src/types/books.types';
import RaedButton from '@/src/components/bookDetails/RaedButton';
import WishListButton from '@/src/components/bookDetails/WishListButton';

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const getBooks = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching books data:', error);
    return [];
  }
}


const BookDetailsPage = async ({
  params,
}: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id)
  ) as IBook;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">
        
        {/* Book Image */}
        <figure className="lg:w-2/5 bg-base-200 p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={500}
            className="rounded-xl shadow-lg object-cover width-200  height-100 "
          />
        </figure>

        {/* Book Details */}
        <div className="card-body lg:w-3/5 p-8">
          
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              {book.category}
            </p>

            <h2 className="card-title text-3xl lg:text-4xl font-bold mt-2">
              {book.bookName}
            </h2>

            <p className="text-base-content/70 mt-2">
              by <span className="font-semibold">{book.author}</span>
            </p>
          </div>

          <div className="divider"></div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="rating">
              <span className="text-warning text-xl">★</span>
            </div>

            <span className="font-semibold">
              {book.rating}
            </span>

            <span className="text-base-content/60">
              Rating
            </span>
          </div>

          {/* Review */}
          <p className="text-base-content/70 leading-7">
            {book.review}
          </p>

          {/* Book Information */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-base-200 rounded-lg p-4">
              <p className="text-sm text-base-content/60">
                Total Pages
              </p>
              <p className="font-bold text-lg">
                {book.totalPages}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-4">
              <p className="text-sm text-base-content/60">
                Published
              </p>
              <p className="font-bold text-lg">
                {book.yearOfPublishing}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-4">
              <p className="text-sm text-base-content/60">
                Publisher
              </p>
              <p className="font-bold">
                {book.publisher}
              </p>
            </div>

            <div className="bg-base-200 rounded-lg p-4">
              <p className="text-sm text-base-content/60">
                Category
              </p>
              <p className="font-bold">
                {book.category}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-primary badge-outline"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <div className="card-actions justify-end mt-6">
           <RaedButton book={book}/>
            <WishListButton book={book}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;