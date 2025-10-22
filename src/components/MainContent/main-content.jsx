import { useRef, useState } from 'react';
import './main-content.css';

function MainContent() {
    const carouselRef = useRef(null);
    const [position, setPosition] = useState(0);

    const movies = [
        {
            id: 1,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUJm2glvnxG20nHzTINFNoFx1xIlNf2qSiWC9D9B-ZHtsrJE_o-N7ZFur75uk9tEfpCOHlgDEXg5ZdSbaeN_Nj7Y2BAixGuXq5c.jpg?r=047",
            title: "Movie 1",
        },
        {
            id: 2,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABc3q_o_ua9xGEiWZ5I8yp0k7yBT8VDkKhLl4naT5BlN-PIXDn6fUoJb6QOxALe_KtJE3MLHUxs-hgLfXty3xIWKOR-PVBOjI5UIgMiCoidsCdW7PK0v22DQfATL5E9kYlNc-.jpg?r=461",
            title: "Movie 2",
        },
        {
            id: 3,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXYdBAe3X5R0Lhv1g-jeMi3UePskTmxzdJIMOmTgOGNcPOxd6t12a0cC67mLL3YGEuhv-kVZCC8KVWaZxl7F3rJ5BPH2jta5Q6xfSzWnMyhevoNXvzKY4Losqv9_LvD7Cbq8.jpg?r=49b",
            title: "Movie 3",
        },
        {
            id: 4,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeoohnxFnnker6egKMvwn6DeDzabFIl9ofD4lkS5kkiTPw-oLlWlg5EpZ55JS5_fxaNaPe3XQikLVASgsLctH9EVpSaAa9-tUfqu6sGD8TTXs0N1KWu9-ZWOWYdhA6HajAgl.jpg?r=f17",
            title: "Movie 4",
        },
        {
            id: 5,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRveE9UZdTkrDaKaP7hU3_aDg9nLvJtoNAK4MNaFXnVyB3deqeQFzEYRHTaBrBRdLnkGwiS5ICXsmW3uOU_6xn0YLaoiYJTb5lGesXGFxdwiYtJiim4AYG578JQzCR-by0lM.jpg?r=605",
            title: "Movie 5",
        },
        {
            id: 6,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRSSTbcc943pMLmRx-WtiBuDhOrTIyPfTe6HjhVoAMKKqmsEvfmjS3gj7KtQ0vhc4t6GS55aivCkL2bWIDUFsJOKlzj6uakNeQ0.jpg?r=d78",
            title: "Movie 6",
        },
        {
            id: 7,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABa4goq7wDX0WsPmbHF_uES71pySJXkbJAERlLqork8TtbxJQ4Ml0g2m-zo8hGxvNb3iUSuvUmWJWqYr8x6ZNeBgeIdBSd4IzLJrrVeSZYasNbzovmlxEdy_OUEdQ5IrkXmnj.jpg?r=c90",
            title: "Movie 7",
        },
        {
            id: 8,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABY5ERkjtgObnNhib_S8P_xD9RvELai8a6JFbQUZzWIYUw-21o08oYM_rgj-kpv4Fd93v3625kpJzWiuQCxr4xbxMkJhMHBZImHWC1540Hf1FN1ED0b1aIYM-crU9Hzv2iWNg.jpg?r=56c",
            title: "Movie 8",
        },
        {
            id: 9,
            img: "https://occ-0-1433-1432.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABY5ERkjtgObnNhib_S8P_xD9RvELai8a6JFbQUZzWIYUw-21o08oYM_rgj-kpv4Fd93v3625kpJzWiuQCxr4xbxMkJhMHBZImHWC1540Hf1FN1ED0b1aIYM-crU9Hzv2iWNg.jpg?r=56c",
            title: "Movie 8",
        },
    ];

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
