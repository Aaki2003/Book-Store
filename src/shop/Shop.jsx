import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";


const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 grid-cols-1">
        {books.map((book) => (
          <Card
            className="max-w-sm"
            renderImage={() => <img width={240} height={320} src={book.imageUrl} alt="image 1" />}
            horizontal
          >
            {/* <img width={240} height={320} src={book.imageUrl} alt=""/> */}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <h2 className="font-semibold">by {book.authorName}</h2>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.bookDesc.slice(0,120)}...
            </p>
            <button className="bg-blue-700 font-semibold text-white py-2 rounded-xl">Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
