import React, { useMemo, useState } from "react";
import "./Books.css";
import BookCard from "../components/BookCard";
import useFetchData from "../hook/useFetchData";
import { Link } from "react-router-dom";

const Books = () => {
  const { data, loading, error } = useFetchData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="others">
      <input
        type="text"
        placeholder="Search for book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="books-body">
        <div className="grid-container">
          {filteredBooks.map((book, index) => (
            <div key={index} className="grid-item">
              <Link to={`/dashboard/books/${book.id}`} className="link">
                <BookCard
                  title={book.title}
                  author={book.author}
                  coverImage={book.coverImage}
                />
              </Link>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && <p>No books found.</p>}
      </div>
    </div>
  );
};

export default Books;
