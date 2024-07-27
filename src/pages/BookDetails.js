import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookDetails.css";
import useFetchBook from "../hook/useFetchBook";
import useDeleteBook from "../hook/useDeleteBook";

function BookDetails() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { book, loading, error } = useFetchBook(bookId);
  const { deleteSingleBook, isDeleting } = useDeleteBook();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!book) return <div>No book found</div>;

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleUpdate = () => {
    navigate(`/dashboard/update-books/${book.id}`);
  };

  const handleDelete = async () => {
    await deleteSingleBook(bookId);
    handleGoBack();
  };

  return (
    <div className="book-page">
      <button onClick={handleGoBack} className="btn">
        go back
      </button>
      <h1>Book Details</h1>

      <div className="book-info-section">
        <div className="book">
          <img
            src={book.coverImage}
            alt={`Cover ${book.id}`}
            className="book-cover"
          />

          <div className="book-info">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">by {book.author}</p>
          </div>
        </div>

        <div className="mod-btns">
          <button onClick={handleUpdate} className="up-btn">
            Update Book
          </button>
          <button
            onClick={handleDelete}
            className="del-btn"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete Book"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
