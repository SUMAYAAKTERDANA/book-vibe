// import React from 'react';

// const page = () => {
//     return (
//         <div>
//             Books page is rendered
//         </div>
//     );
// };

// export default page;


import Image from 'next/image';
import { IBook } from '@/src/types/books.types';
import Link from 'next/link';





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
const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-17.5 px-4">

      {/* Section Title */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Our collection
        </h2>

        <p className="mt-2 text-gray-500">
          Explore our collection all books
        </p>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {booksData?.map((book: IBook) => {
          return (
            <div
              key={book.bookId}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Book Image */}
              <div className="relative h-72 bg-gray-100">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                  className="object-contain p-5"
                />
              </div>

              {/* Book Information */}
              <div className="p-5">

                {/* Category & Rating */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {book.category}
                  </span>

                  <span className="text-sm font-semibold text-yellow-500">
                    ⭐ {book.rating}
                  </span>
                </div>

                {/* Book Name */}
                <h3 className="text-xl font-bold text-gray-800">
                  {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                  by {book.author}
                </p>

                {/* Review */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                  {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Information */}
                <div className="mt-5 flex items-center justify-between border-t pt-4 text-sm text-gray-500">
                  <span>
                    📖 {book.totalPages} pages
                  </span>

                  <span>
                    {book.yearOfPublishing}
                  </span>
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                  <button className="btn btn-success mt-5 w-full rounded-xl">
                    View Details
                  </button>
                </Link>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Books;

