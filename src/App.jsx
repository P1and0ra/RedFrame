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

// Новая страница входа (создай файл src/SignIn.jsx)
import SignIn from "./Pages/SignIn";   // ← просто из корня src!

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
            </div>
          </>
        }
      />

      {/* Страница входа */}
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}

export default App;