import { useState } from "react";

function navbar() {
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <nav className="navbar navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="form-control me-2"
            type="search"
            placeholder={search}
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default navbar;
