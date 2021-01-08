import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UserNav = () => {


  return (
    <nav>
    <ul className="nav flex-column">
      <li className="nav-item mt4">
        <Link to="/user/history" className="nav-link">
          History
        </Link>
      </li>

      
    </ul>
  </nav>
  )
  
}

export default UserNav;
