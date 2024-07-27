import { useState, useEffect } from "react";
import { getBook } from "../utilities/axios";

const useFetchBook = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await getBook(id);
        setBook(response);
        setError(null);
      } catch (err) {
        setError(err);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return { book, loading, error };
};

export default useFetchBook;
