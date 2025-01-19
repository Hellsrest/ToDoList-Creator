import {NavLink} from "react-router-dom";
function Footer() {
  return (
    <>
    <div className="container-fluid bg-dark text-light py-5">
  <div className="row">
    <div className="col-md-6">
      <h4 className="mb-4">Quick Links</h4>
      <ul className="list-unstyled">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link text-light'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link text-light'}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link text-light'}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="col-md-6">
      <h4 className="mb-4">Our Location</h4>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56532.297863937456!2d85.32937262929687!3d27.67809153139231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1737117643785!5m2!1sen!2snp"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-12 text-center">
      <p className="mb-0">© 2025 Your Company Name. All Rights Reserved.</p>
    </div>
  </div>
</div>

    </>
  );
}

export default Footer;
