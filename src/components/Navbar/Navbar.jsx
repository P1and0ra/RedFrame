import { NetflixLogo } from "../../assets";
import "./Navbar.css";
import NavbarButton from "./NavbarButton";
import DropDownButton from "./DropDownButton";

function Navbar({ variant = "home" }) {
  // variant = "home" — главная страница (с кнопками)
  // variant = "auth"  — страница входа (без кнопок)

  const isAuthPage = variant === "auth";

  return (
    <div className={`navbar ${isAuthPage ? "navbar-auth" : ""}`}>
      <div className="navbar-sticky">
        <img src={NetflixLogo} alt="Netflix" className="logo" />

        {/* Показываем кнопки ТОЛЬКО на главной странице */}
        {!isAuthPage && (
          <div className="navbar-right">
            <DropDownButton />
            <NavbarButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;