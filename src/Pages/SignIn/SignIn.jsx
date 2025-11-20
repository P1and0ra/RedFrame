// src/SignIn.jsx — ЧИСТАЯ страница входа поверх Heroes
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Heroes from "../../components/Heroes/Heroes";
import SignInForm from "../../components/SignInForm/SignInForm";
import Footer from "../../components/Footer/Footer";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin-page">
      {/* Навигационная панель */}
      <Navbar variant="auth" />
      {/* Фоновые герои */}
      <Heroes />
      {/* Форма по центру */}
      <div className="signin-form-container">
        <div>            {/* ← эта обёртка нужна для max-width */}
          <SignInForm />
        </div>
      </div>
      <div className="footer-signin-container">
        <Footer variant="auth"/>
      </div>
    </div>
  );
}

export default SignIn;