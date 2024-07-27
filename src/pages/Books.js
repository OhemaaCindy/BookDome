import React from "react";
import "./Books.css";
import BookCard from "../components/BookCard";
import useFetchData from "../hook/useFetchData";
import { Link } from "react-router-dom";

const Books = () => {
  const { data, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="others">
      <div className="grid-container">
        {data.map((book, index) => (
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
    </div>
  );
};

export default Books;
