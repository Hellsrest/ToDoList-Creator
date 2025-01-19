import logo from "/logo.png";
import {NavLink} from "react-router-dom";
function Navbar() {
  return (
    //this is change for final commit
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



        {/*this is a hamburger button only displayed when in mobile view or
          responsive view.*/}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*this is the end of the hamburger button.*/}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

              <NavLink  to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About Us
              </NavLink>
            </li>
            <NavLink to="/contactus" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>          
                Contact
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
