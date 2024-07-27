import axios from "axios";

const api = axios.create({
  baseURL: "https://bookdomeserver.onrender.com",
});

// Add a request interceptor
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const login = async (email, password) => {
  try {
    const response = await api.post("/users", { email, password });
    return response.data;
  } catch (error) {
    // console.error(
    //   "Login failed:",
    //   error.response ? error.response.data : error.message
    // );
    throw error;
  }
};

// Example of a CRUD operation
export const getAllBooks = async () => {
  try {
    const response = await api.get("/books");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBook = async (id) => {
  try {
    const response = await api.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example of a CRUD operation
export const addBook = async (book) => {
  try {
    const response = await api.post("/books", book);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update a book
export const updateBook = async (id, updatedBook) => {
  try {
    const response = await axios.put(`/books/${id}`, updatedBook);
    return response.data;
  } catch (error) {
    console.error(`Error updating book with id ${id}:`, error);
    throw error;
  }
};

// Delete a book
export const deleteBook = async (id) => {
  try {
    await axios.delete(`/books/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting book with id ${id}:`, error);
    throw error;
  }
};

export default api;
