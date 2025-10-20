import "./foot-main.css";

function FootMain() {
    return (
        <div className="FootMain">
            <div>
                <h1 className="textH1">Unlimited movies, TV shows, and more</h1>
            </div>
            <div>
                <h2 className="textH2">Starts at 33 zł. Cancel anytime.</h2>
            </div>
            <div>
                <h3 className="textH3">
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>
            </div>

            {/* Горизонтальная форма: поле слева, кнопка справа */}
            <div className="form-container">
                <div className="input-container">
                    <input type="email" id="email" required placeholder=" " />
                    <label htmlFor="email">Enter your email</label>
                </div>
                <button className="GetStarted-button">Get Started {'  '}{">"}</button>
            </div>
        </div>
    );
}

export default FootMain;
