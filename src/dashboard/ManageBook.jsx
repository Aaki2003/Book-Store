import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const ManageBook = () => {
  const [allBooks, setallBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setallBooks(data);
        console.log(data);
      });
  }, []);

  // delete selected books

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/book/${id}`,{
      method: "DELETE",
    }).then((res) => res.json()).then((data) => {
      toast.success("Book Deleted Successfully");
    })
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <div className="overflow-x-auto">
        <Table hoverable striped className="lg:w-[1180px]">
          <Table.Head>
            <Table.HeadCell>SI No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          {allBooks.map((book, index) => (
            <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}.
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell className="flex items-center">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                  <MdDeleteOutline
                    className="ml-4 text-red-600 hover:text-rose-950 h-8 w-8 "
                    onClick={() =>handleDelete(book._id) }/>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageBook;
