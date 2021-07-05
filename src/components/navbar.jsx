import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchSearchedFList } from "../store/list.actions";

function navbar() {
  const dispatch = useDispatch();

  const totalCart = "null";
  const [search, setSearch] = useState("");
  const [linkIsActive, setLinkIsActive] = useState("");

  const handleIsActive = (e) => {
    setLinkIsActive(e.target.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchSearchedFList(search));
    };
    search && fetchData();
  }, [search]);

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
          <span className="badge badge-success">null</span>
        </div>
      </div>

      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          aria-label="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </nav>
  );
}

export default navbar;
