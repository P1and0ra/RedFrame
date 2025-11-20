// src/App.jsx — Финальная версия с роутингом

import "./App.css";
import { Routes, Route } from "react-router-dom";

// Твои компоненты (главная страница)
import Navbar from "./components/Navbar/Navbar";
import Heroes from "./components/Heroes/Heroes";
import FootMain from "./components/FootMain/foot-main";
import MainContent from "./components/MainContent/main-content";
import MoreReason from "./components/MainContent/more-reason";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

// Новые страницы (создайте файлы src/Pages/SignIn/SignIn.jsx и src/Pages/SignUp/SignUp.jsx)
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <Routes>
      {/* Главная страница */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Heroes />
            <FootMain />
            <div className="page-bg">
              <MainContent />
              <MoreReason />
              <FAQ />
              <Footer />
            </div>
          </>
        }
      />
      {/* Страница входа */}
      <Route
        path="/login"
        element={
          <>
            <SignIn />
          </>
        }
      />
      {/* Страница регистрации */}
      <Route
        path="/signup"
        element={
          <>
            <SignUp />
          </>
        }
      />
    </Routes>
  );
}

export default App;