import { Link } from "react-router-dom";
import "./NavbarButton.css";
function NavbarButton() {
  return (
    <Link to="/login">
      <button className="navbar-button">Sign In</button>
    </Link>
  );
}

export default NavbarButton;