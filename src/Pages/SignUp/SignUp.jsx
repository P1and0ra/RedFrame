import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Heroes from "../../components/Heroes/Heroes";
import SignInForm from "../../components/SignInForm/SignInForm"; // оставляем, потому что форма почти идентична
import Footer from "../../components/Footer/Footer";
import "./SignUp.css";

function SignUp() {
    return (
        <div className="signup-page">        
            {/* Навигационная панель */}
            <Navbar variant="auth" />

            {/* Фоновые постеры */}
            <Heroes />

            {/* Форма регистрации по центру */}
            <div className="signup-form-container">   
                <div>          {/* обёртка для max-width и центрирования */}
                    <SignInForm isSignup />   {/* если хочешь — передай пропс, чтобы внутри формы переключалось на регистрацию */}
                </div>
            </div>

            {/* Футер всегда внизу */}
            <div className="footer-signup-container">  
                <Footer variant="auth" />
            </div>
        </div>
    );
}

export default SignUp;