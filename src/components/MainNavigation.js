import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./mainNavigation.module.css";
const ManNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end //it will prevent the default behavior of the browser
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to="/product">Product</Link> */}
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ManNavigation;
