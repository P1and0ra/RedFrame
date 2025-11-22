import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import "./SignInForm.css"

function SignInForm({ isSignup = false }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const endpoint = isSignup
            ? "http://localhost:5000/api/auth/register"
            : "http://localhost:5000/api/auth/login"

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    isSignup ? { name, email, password } : { email, password }
                ),
            })
            const data = await res.json()
            if (res.ok) {
                setMessage(isSignup ? "Registration successful!" : "Login successful!")
                console.log(data)
                localStorage.setItem("isAuthenticated", "true");
                navigate("/profiles")
            } 
            else {
                setMessage(data.message || "Ошибка")
            }
            return;
        } catch (err) {
            console.error("Fetch error:", err)
            setMessage("Сервер недоступен")
        }
    }

    return (
        <div className="signin-form-wrapper">
            <div className="signin-card">
                <h1>{isSignup ? "Create an account" : "Sign In"}</h1>

                <form onSubmit={handleSubmit}>
                    {/* Поле имя — только для регистрации */}
                    {isSignup && (
                        <div className="input-wrapper">
                            <input
                                type="text"
                                className="signin-input"
                                id="name"
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="name" className="input-label">
                                First and last name
                            </label>
                        </div>
                    )}

                    {/* Поле email */}
                    <div className="input-wrapper">
                        <input
                            type="email"
                            className="signin-input"
                            id="email"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email" className="input-label">
                            Email or mobile number
                        </label>
                    </div>

                    {/* Поле пароль */}
                    <div className="input-wrapper">
                        <input
                            type="password"
                            className="signin-input"
                            id="password"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                    </div>

                    {/* Кнопка */}
                    <button type="submit" className="btn-signin">
                        {isSignup ? "Sign Up" : "Sign In"}
                    </button>

                    {/* Сообщение пользователю */}
                    {message && <p className="form-message">{message}</p>}

                    {/* "OR" и дополнительные элементы — только на входе */}
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

                    {/* Ссылка для переключения */}
                    <div className="signup-link">
                        <p>
                            {isSignup ? "Already have an account?" : "New to Netflix?"}{" "}
                            <Link to={isSignup ? "/login" : "/signup"}>
                                {isSignup ? "Sign in now" : "Sign up now"}.
                            </Link>
                        </p>
                    </div>

                    {/* reCAPTCHA */}
                    <div className="recaptcha-text">
                        <p>
                            This page is protected by Google reCAPTCHA to ensure you're not a
                            bot. <a href="#">Learn more</a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInForm
