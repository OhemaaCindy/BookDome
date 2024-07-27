import { useNavigate, useParams } from "react-router-dom";
import "./UpdateBook.css";
import "../components/AddBook.css";

import { useState } from "react";
import { updateBook } from "../utilities/axios";
import useFetchBook from "../hook/useFetchBook";

const UpdateBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { book: Book, loading, error } = useFetchBook(bookId);

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

      const updatedBook = {
        ...book,
        title: book.title || Book.title,
        author: book.author || Book.author,
        coverImage: book.coverImage || Book.coverImage,
      };
      console.log({ updatedBook });

      await updateBook(bookId, updatedBook);

      setBook({ title: "", author: "", coverImage: "" });
      navigate(-1);
    } catch (error) {
      console.error("Error posting book:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate("/dashboard/books");
  };

  if (loading) return <div>Loading Book...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!book) return <div>No book found</div>;

  return (
    <div className="up-bk">
      <button onClick={handleGoBack} className="btn">
        go back
      </button>

      <div>
        <h1>Update Book {bookId}</h1>

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
                // required
                placeholder={Book.title || "book title here"}
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
                // required
                placeholder={Book.author || "author of the book"}
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
                // required
                placeholder={Book.coverImage || "thumbnail of the book"}
              />
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Book"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
