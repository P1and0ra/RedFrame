import { useRef, useState } from 'react';
import './main-content.css';
import { movies } from '../../assets';

function MainContent() {
    const carouselRef = useRef(null);
    const [position, setPosition] = useState(0);


    // показываем 4 карточки (видимая область)
    const VISIBLE = 4;
    const maxPosition = Math.max(0, movies.length - VISIBLE);
    const hasLeft = position > 0;
    const hasRight = position < maxPosition;

    const scroll = (direction) => {
        const cardWidth = 260; // увеличенная ширина карточки
        const gap = 20;        // увеличенный gap
        const step = VISIBLE;  // листать на один "экран" (4 карточки)
        let newPosition = direction === "left" ? position - step : position + step;

        if (newPosition < 0) newPosition = 0;
        if (newPosition > maxPosition) newPosition = maxPosition;

        setPosition(newPosition);

        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${newPosition * (cardWidth + gap)}px)`;
        }
    };

    return (
        <div className="trending-section">
            <h1 className="trending-now">Trending Now</h1>

            <div className={`carousel-wrapper ${hasLeft ? 'has-left' : ''} ${hasRight ? 'has-right' : ''}`}>
                <button
                    className="arrow left"
                    onClick={() => scroll("left")}
                    aria-label="Previous"
                    disabled={!hasLeft}
                >
                    &#10094;
                </button>

                <div className="movie-carousel" ref={carouselRef}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img src={movie.img} alt={movie.title} />
                        </div>
                    ))}
                </div>

                <button
                    className="arrow right"
                    onClick={() => scroll("right")}
                    aria-label="Next"
                    disabled={!hasRight}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default MainContent;
