import React, { useState } from "react";
import { useLoaderData, useParams, Link , useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Toast,
} from "flowbite-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBook = () => {
  const { id } = useParams();
  // the book data gets stored in this variables using the loader data
  const { bookTitle, authorName, imageUrl, category, bookDesc, bookPDFUrl } =
    useLoaderData();

  const [selectedBook, setselectedBook] = useState();

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDesc = form.bookDesc.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDesc,
      bookPDFUrl,
    };

    // Send data to database
    fetch(`http://localhost:3000/book/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your book has been updated successfully!!");
      });
    return (
      navigate(-1)
    );
  };
  return (
    <div className="px-4 my-12 ">
      <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput
            id="bookTitle"
            type="text"
            name="bookTitle"
            placeholder="Name of your book"
            defaultValue={bookTitle}
            required
          />
        </div>
        {/* author name */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput
            id="authorName"
            type="text"
            name="authorName"
            placeholder="Author Name"
            defaultValue={authorName}
            required
          />
        </div>

        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="imageUrl" value="Image URL" />
          </div>
          <TextInput
            id="imageUrl"
            type="text"
            name="imageUrl"
            placeholder="Link of the book"
            defaultValue={imageUrl}
            required
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="category" value="Book Category" />
          </div>
          <TextInput
            id="category"
            type="text"
            name="category"
            placeholder="Book Category"
            defaultValue={category}
            required
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFUrl"
            type="text"
            name="bookPDFUrl"
            placeholder="PDF link of your book"
            defaultValue={bookPDFUrl}
            required
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookDesc" value="Book Description" />
          </div>
          <Textarea
            id="bookDesc"
            placeholder="Descriptipn of your book"
            defaultValue={bookDesc}
            required
            rows={4}
          />
        </div>

        <Button className="lg:w-1/2 mt-4" type="submit">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
