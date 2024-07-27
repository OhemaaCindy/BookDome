import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../utilities/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);

    localStorage.removeItem("token");
    logout();

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    navigate("/login");
    setIsLoggingOut(false);
  };

  return (
    <button onClick={handleLogout} disabled={isLoggingOut}>
      {isLoggingOut ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
