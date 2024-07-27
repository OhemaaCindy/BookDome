import React from "react";
import "./BookCard.css";

const BookCard = ({ title, author, coverImage }) => {
  return (
    <div className="book-card">
      <img src={coverImage} alt={`Cover of ${title}`} className="book-cover" />

      <div className="book-info">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">by {author}</p>
      </div>
    </div>
  );
};

export default BookCard;
