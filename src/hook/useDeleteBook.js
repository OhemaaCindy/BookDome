import { useState } from "react";
import { deleteBook } from "../utilities/axios";

const useDeleteBook = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteSingleBook = async (id) => {
    setIsDeleting(true);
    setError(null);

    try {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await deleteBook(id);
      return res;
    } catch (err) {
      setError(err);
      return false;
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteSingleBook, isDeleting, error };
};

export default useDeleteBook;
