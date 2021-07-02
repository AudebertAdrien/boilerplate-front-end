import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { cartSelector } from "../store/cart.selectors";

function navbar({ filterResults, setIsFiltering }) {
  const [linkIsActive, setLinkIsActive] = useState("");

  const count = useSelector(cartSelector);

  const handleIsActive = (e) => {
    setLinkIsActive(e.target.id);
  };

  return (
    <nav className="navbar navbar-light ">
      <div className="d-flex">
        <a className="navbar-brand">Navbar</a>
        <nav className="nav">
          <Link
            className={`nav-link ${linkIsActive === "home" ? "active" : ""}`}
            to="/"
            onClick={(e) => handleIsActive(e)}
          >
            Home
          </Link>
          <Link
            className={`nav-link ${linkIsActive === "cart" ? "active" : ""}`}
            to="/cart"
          >
            Cart
          </Link>
        </nav>
        <div className="cart">
          <i className="fa fa-shopping-cart"></i>
          <span className="badge badge-success">{count}</span>
        </div>
      </div>

      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          aria-label="Search"
          onChange={(e) => {
            setIsFiltering(e.target.value.length > 0);
            filterResults(e.target.value);
          }}
        />
      </form>
    </nav>
  );
}

export default navbar;
