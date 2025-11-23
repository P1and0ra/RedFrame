
import "./App.css";
import { Routes, Route } from "react-router-dom";

// компоненты
import Navbar from "./components/Navbar/Navbar";
import Heroes from "./components/Heroes/Heroes";
import FootMain from "./components/FootMain/foot-main";
import MainContent from "./components/MainContent/main-content";
import MoreReason from "./components/MainContent/more-reason";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

// Новые страницы 
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profiles from "./Pages/Profiles/Profiles";
import Browse from "./Pages/Browse/Browse";

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
      {/* Страница профилей */}
      <Route
        path="/profiles"
        element={
          <>
            <Profiles />
          </>
        }
      />
      {/* Страница просмотра контента */}
      <Route
        path="/browse"
        element={
          <>
            <Browse />
          </>
        }
      />
    </Routes>
  );
}

export default App;