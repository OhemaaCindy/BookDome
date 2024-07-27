import React from "react";
import { Outlet } from "react-router-dom";

import { useAuth } from "../utilities/AuthContext";
import LoginForm from "./LoginForm";

const Root = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <LoginForm />;
};

export default Root;
