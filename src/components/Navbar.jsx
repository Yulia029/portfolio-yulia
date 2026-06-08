function Navbar({ setPage }) {
  return (
    <nav className="navbar">

      <div className="nav-links">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("project")}>
          Project
        </button>

        <button onClick={() => setPage("experience")}>
          Experience
        </button>

        <button onClick={() => setPage("about")}>
          About
        </button>

      </div>

    </nav>
  );
}

export default Navbar;