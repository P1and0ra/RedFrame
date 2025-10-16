import { NetflixLogo } from "../../assets";
import './Navbar.css'
import NavbarButton from "./NavbarButton";
import DropDownButton from "./DropDownButton";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-sticky">
        <img src={NetflixLogo} className="logo"></img>
        <div className="navbar-right">
          <div>
            <DropDownButton/>
          </div>
          <div>
            <NavbarButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
