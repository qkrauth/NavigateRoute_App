import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Shop</h2>
      <nav>
        <Link to="/">
            <button className="nav-btn">Home</button>
        </Link>
        <Link to="/details">
            <button className="nav-btn">Details</button>
        </Link>
        <Link to="/cart">
            <button className="nav-btn">Cart</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
