import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";

function Navigation() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-base-200 text-base-content">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          React Firebase Login
        </Link>
      </div>

      <div className="navbar-middle">
        {!user ? (
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                : "btn btn-ghost mr-2 hidden lg:flex"
            }
          >
            Home
          </NavLink>
        ) : (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                : "btn btn-ghost mr-2 hidden lg:flex"
            }
          >
            Dashboard
          </NavLink>
        )}
      </div>
      {!user ? (
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn mr-2">Login</a>
          </Link>
          <Link to="/register">
            <a className="btn btn-primary mr-2">Register</a>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-ghost btn-active mb-2"
                      : "btn btn-ghost mb-2"
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/logout">
            <a className="btn mr-2">Log Out</a>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-ghost btn-active mb-2"
                      : "btn btn-ghost mb-2"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
