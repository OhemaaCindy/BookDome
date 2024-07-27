import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "../utilities/AuthContext";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <div className="logo">
        <img
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user profile"
          style={{ objectFit: "cover" }}
        />
        <p className="username">{user.username}</p>
      </div>
      {/* <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search courses" />
          <button>🔍</button>
        </div>
      </div> */}

      <div className="logoutBtn">
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
}

function Sidebar() {
  const sidebarRoutes = [
    { name: "Books", icon: "📚", path: "/dashboard/books" },
    { name: "Add Book", icon: "📝", path: "/dashboard/add-books" },
  ];

  return (
    <aside>
      <ul>
        {sidebarRoutes.map((route) => (
          <li key={route.name} className="route">
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {route.icon} {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function DashboardContent() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Dashboard;
