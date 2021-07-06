import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchSearchedFList } from "../modules/list/list.actions";
import { totalCartSelector } from "../modules/cart/cart.selectors";

function navbar() {
  const dispatch = useDispatch();

  const totalCart = useSelector(totalCartSelector);

  const [search, setSearch] = useState("");
  const [linkIsActive, setLinkIsActive] = useState("home");
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
            id="home"
            className={`nav-link ${linkIsActive === "home" ? "active" : ""}`}
            to="/"
            onClick={(e) => handleIsActive(e)}
          >
            Home
          </Link>
          <Link
            id="cart"
            className={`nav-link ${linkIsActive === "cart" ? "active" : ""}`}
            to="/cart"
            onClick={(e) => handleIsActive(e)}
          >
            Cart
          </Link>
        </nav>

        <div className="cart">
          <i className="fa fa-shopping-cart"></i>
          <span className="badge badge-success">{totalCart}</span>
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
