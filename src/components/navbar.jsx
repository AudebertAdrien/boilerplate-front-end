function navbar({ filterResults, setIsFiltering }) {
  return (
    <nav className="navbar navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
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
      </div>
    </nav>
  );
}

export default navbar;
