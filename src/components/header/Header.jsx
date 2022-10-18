import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-1">
        <Link to={`/`} className="brand-logo">
          BOOKS
        </Link>
      </div>
    </nav>
  );
};

export default Header;
