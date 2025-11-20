
import { Link } from "react-router-dom";
import "./SignInForm.css";

function SignInForm({ isSignup = false }) {   // ← вот и всё волшебство
    return (
        <div className="signin-form-wrapper">
            <div className="signin-card">
                <h1>{isSignup ? "Create an account" : "Sign In"}</h1>

                <form onSubmit={(e) => e.preventDefault()}>

                    {/* Поле ИМЯ — только на регистрации */}
                    {isSignup && (
                        <div className="input-wrapper">
                            <input
                                type="text"
                                className="signin-input"
                                id="name"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="name" className="input-label">
                                First and last name
                            </label>
                        </div>
                    )}

                    {/* ПОЛЕ EMAIL */}
                    <div className="input-wrapper">
                        <input
                            type="text"
                            className="signin-input"
                            id="email"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="email" className="input-label">
                            Email or mobile number
                        </label>
                    </div>

                    {/* ПОЛЕ ПАРОЛЬ */}
                    <div className="input-wrapper">
                        <input
                            type="password"
                            className="signin-input"
                            id="password"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                    </div>

                    {/* КНОПКА — меняется текст */}
                    <button type="submit" className="btn-signin">
                        {isSignup ? "Sign Up" : "Sign In"}
                    </button>

                    {/* "OR" и код — только на входе */}
                    {!isSignup && (
                        <>
                            <div className="or-divider">
                                <span>OR</span>
                            </div>

                            <button type="button" className="btn-code">
                                Use a Sign-In Code
                            </button>

                            <a href="#" className="forgot-link">
                                Forgot password?
                            </a>

                            <div className="remember-me">
                                <label>
                                    <input type="checkbox" defaultChecked />
                                    <span>Remember me</span>
                                </label>
                            </div>
                        </>
                    )}

                    {/* ССЫЛКА "New to Netflix?" ↔ "Already have an account?" */}
                    <div className="signup-link">
                        <p>
                            {isSignup ? "Already have an account?" : "New to Netflix?"}{" "}
                            <Link to={isSignup ? "/login" : "/signup"}>
                                {isSignup ? "Sign in now" : "Sign up now"}.
                            </Link>
                        </p>
                    </div>

                    {/* reCAPTCHA — показываем везде или только на входе — как хочешь */}
                    <div className="recaptcha-text">
                        <p>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                            <a href="#">Learn more</a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;