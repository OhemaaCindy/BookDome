import React, { useState } from "react";
import "./AddBook.css";
import { addBook } from "../utilities/axios";
import { useNavigate } from "react-router-dom";

const BookPostForm = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    coverImage: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate a network request
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      await addBook(book);

      setBook({ title: "", author: "", coverImage: "" });

      navigate(-1);
      // alert("Book added successfully!");
    } catch (error) {
      console.error("Error posting book:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="addform-body">
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
            placeholder="book title here"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
            placeholder="author of the book"
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverImage">Cover Image URL:</label>
          <input
            type="url"
            id="coverImage"
            name="coverImage"
            value={book.coverImage}
            onChange={handleChange}
            required
            placeholder="thumbnail of the book"
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookPostForm;
