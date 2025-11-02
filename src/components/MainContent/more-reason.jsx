import './more-reason.css';

function MoreReason() {
    return (
        <div className="more-reason-section">
            <h2 className="more-reason-title">More Reasons to Join</h2>

            <div className="more-reason-cards">
                <div className="reason-card">
                    <h3>Enjoy on your TV</h3>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>

                <div className="reason-card">
                    <h3>Download your shows to watch offline</h3>
                    <p>Save your favorites easily and always have something to watch.</p>
                </div>

                <div className="reason-card">
                    <h3>Watch everywhere</h3>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>

                <div className="reason-card">
                    <h3>Create profiles for kids</h3>
                    <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                </div>
            </div>
        </div>
    );
}

export default MoreReason;
