
import "./SignInForm.css";

function SignInForm() {
    return (
        <div className="signin-form-wrapper">
            <div className="signin-card">
                <h1>Sign In</h1>

                <form onSubmit={(e) => e.preventDefault()}>
                    {/* ========== ПОЛЕ EMAIL ========== */}
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

                    {/* ========== ПОЛЕ ПАРОЛЬ ========== */}
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

                    {/* ========== КНОПКА ВХОДА ========== */}
                    <button type="submit" className="btn-signin">
                        Sign In
                    </button>

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

                    <div className="signup-link">
                        <p>
                            New to Netflix? <a href="/">Sign up now</a>.
                        </p>
                    </div>

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