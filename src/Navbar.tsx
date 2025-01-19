import logo from "/logo.png";
import {NavLink} from "react-router-dom";
function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand d-flex align-items-center" href="/">
    <img
      src={logo}
      width="50"
      height="50"
      className="d-inline-block align-top"
      alt="no logo found"
    />
    <div className="ms-2"> ToDo List</div>
  </a>

  {/* Hamburger button */}
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse" // Change to "data-bs-toggle" for Bootstrap 5
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  {/* Collapsed nav links */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto"> {/* Added ms-auto for alignment */}
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
</nav>

    </>
  );
}

export default Navbar;
