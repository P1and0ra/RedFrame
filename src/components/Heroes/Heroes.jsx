import './Hero.css';
import { LandingBackground } from "../../assets";

function Heroes() {
    return (
        <div className="hero">
            <img src={LandingBackground} alt="background" className="hero-background" />
        </div>
    )
}

export default Heroes;
