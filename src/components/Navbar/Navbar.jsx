// src/components/Navbar/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { NetflixLogo } from "../../assets";
import "./Navbar.css";
import NavbarButton from "./NavbarButton";
import DropDownButton from "./DropDownButton";

function Navbar({ variant = "home" }) {
  const navigate = useNavigate();

  // Проверяем, залогинен ли пользователь
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Обработчик выхода
  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login"); // или "/" — как хочешь
  };

  const isAuthPage = variant === "auth";

  return (
    <div className={`navbar ${isAuthPage ? "navbar-auth" : ""}`}>
      <div className="navbar-sticky">
        <img src={NetflixLogo} alt="Netflix" className="logo" />

        {/* Кнопки только если НЕ на страницах входа/регистрации */}
        {!isAuthPage && (
          <div className="navbar-right">
            <DropDownButton />

            {/* ←←←←←←←←←← ЗДЕСЬ МЕНЯЕТСЯ КНОПКА ←←←←←←←←←← */}
            {isAuthenticated ? (
              <button onClick={handleSignOut} className="btn-signout">
                Sign Out
              </button>
            ) : (
              <NavbarButton /> // твоя старая кнопка "Sign In"
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;