import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav className="mt-4">
    <ul className="nav flex-column">
      <li className="nav-itema active">
        <Link to="/user/history" className="nav-link">
          Create Blog
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/viewblog" className="nav-link">
          View AllBlog
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
