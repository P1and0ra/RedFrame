// src/SignIn.jsx — ЧИСТАЯ страница входа поверх Heroes
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Heroes from "../components/Heroes/Heroes";
import SignInForm from "../components/SignInForm/SignInForm";
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
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;