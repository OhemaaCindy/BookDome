import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from "./utilities/AuthContext";
import Root from "./pages/Root";
import PrivateRoute from "./pages/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";

import Login from "./pages/LoginForm";
import Books from "./pages/Books";
import Dashboard from "./pages/Dashboard";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

const DashboardRoot = () => {
  return <Navigate to="/dashboard/books" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              { path: "", element: <DashboardRoot /> },
              { path: "books", element: <Books /> },
              { path: "books/:bookId", element: <BookDetails /> },
              { path: "add-books", element: <AddBook /> },
              { path: "update-books/:bookId", element: <UpdateBook /> },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
