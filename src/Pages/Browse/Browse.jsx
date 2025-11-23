// src/pages/Browse.jsx
import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { movies } from "../../assets"; // ← твои фильмы
import "./Browse.css";

export default function Browse() {
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Дублируем фильмы, чтобы было много в каруселях
    const bigList = [...movies, ...movies, ...movies, ...movies]; // 36+ фильмов

    const rows = [
        { title: "Trending Now", items: bigList },
        { title: "Continue Watching", items: bigList.slice(5) },
        { title: "Top 10 in Your Country", items: bigList.slice(10) },
        { title: "New Releases", items: bigList },
        { title: "Because You Watched Stranger Things", items: bigList.slice(3) },
    ];

    const scrollRow = (ref, direction) => {
        const scrollAmount = 1000;
        ref.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="browse-page">
            <Navbar variant="home" />

            {/* Главный баннер */}
            <div className="hero-banner">
                <img src={movies[0].img} alt="Featured" className="hero-bg" />
                <div className="hero-gradient" />
                <div className="hero-content">
                    <h1>{movies[0].title || "Featured Movie"}</h1>
                    <p>
                        An epic story of love, betrayal, and redemption that will keep you on the edge of your seat.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-play">Play</button>
                        <button className="btn-info">More Info</button>
                    </div>
                </div>
            </div>

            {/* Карусели */}
            <div className="content-section">
                {rows.map((row, idx) => {
                    const rowRef = useRef(null);

                    return (
                        <div key={idx} className="movie-row">
                            <h2 className="row-title">{row.title}</h2>

                            <div className="row-wrapper">
                                <button
                                    className="nav-arrow left"
                                    onClick={() => scrollRow(rowRef, "left")}
                                >
                                    ‹
                                </button>

                                <div className="row-posters" ref={rowRef}>
                                    {row.items.map((movie) => (
                                        <div
                                            key={`${movie.id}-${idx}`}
                                            className="poster-wrapper"
                                            onClick={() => setSelectedMovie(movie)}
                                        >
                                            <img src={movie.img} alt={movie.title} className="poster-large" />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="nav-arrow right"
                                    onClick={() => scrollRow(rowRef, "right")}
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Полноэкранное окно при клике — ТОЧНО КАК НА ТВОЁМ СКРИНЕ */}
            {selectedMovie && (
                <div className="movie-modal-overlay" onClick={() => setSelectedMovie(null)}>
                    <div className="movie-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedMovie(null)}>
                            ×
                        </button>

                        <img src={selectedMovie.img} alt={selectedMovie.title} className="modal-banner" />

                        <div className="modal-info">
                            <h1>{selectedMovie.title || "Movie Title"}</h1>

                            <div className="modal-meta">
                                <span className="rating">98% Match</span>
                                <span>2025</span>
                                <span>2h 17m</span>
                                <span className="hd">HD</span>
                            </div>

                            <p className="modal-description">
                                As an angry mob rises against the Wicked Witch, Glinda and Elphaba will need to come together one final time...
                            </p>

                            <div className="modal-actions">
                                <button className="btn-play-large">Play</button>
                                <button className="btn-mylist-large">+ My List</button>
                            </div>

                            <div className="modal-details">
                                <div><strong>Cast:</strong> Cynthia Erivo, Ariana Grande, Jonathan Bailey</div>
                                <div><strong>Genres:</strong> Fantasy, Musical, Adventure</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}