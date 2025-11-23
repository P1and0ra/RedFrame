// src/pages/Browse.jsx
import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { MovieData } from "../../assets";
import "./Browse.css";

export default function Browse() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const rowRefs = useRef({});

    const moviesWithDetails = MovieData.map((movie, i) => ({
        ...movie,
        match: [94, 97, 89, 98, 92, 96, 91, 99, 87][i] || 95,
        year: [2024, 2023, 2025, 2022, 2024, 2021, 2025, 2023, 2024][i],
        duration: i % 2 === 0
            ? `${2 + (i % 3)}h ${15 + (i * 5) % 45}m`
            : `${i + 1} Season${i > 0 ? "s" : ""}`,
        rating: i % 3 === 0 ? "TV-MA" : i % 2 === 0 ? "R" : "PG-13",
        description: [
            "As an angry mob rises against the Wicked Witch, Glinda and Elphaba will need to come together one final time...",
            "A mind-bending sci-fi thriller that will leave you questioning reality.",
            "The epic conclusion to the beloved fantasy saga begins here.",
            "A gripping crime drama based on true events.",
            "Love, betrayal, and revenge in the heart of Paris.",
            "The most anticipated superhero team-up of the decade.",
            "A heartwarming story about family and second chances.",
            "Dark secrets unravel in this psychological horror masterpiece.",
            "An action-packed adventure across the multiverse."
        ][i] || "An incredible story you won't forget."
    }));

    const bigList = [...moviesWithDetails, ...moviesWithDetails, ...moviesWithDetails, ...moviesWithDetails];

    const rows = [
        { title: "Continue Watching", items: bigList },
        { title: "Top 10 in Your Country", items: bigList.slice(3) },
        { title: "Trending Now", items: bigList },
        { title: "New Releases", items: bigList.slice(7) },
    ];

    const scrollRow = (index, direction) => {
        const row = rowRefs.current[index];
        if (row) {
            row.scrollBy({
                left: direction === "left" ? -1300 : 1300,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="netflix-app">
            <div className="app-container">
                <Navbar variant="home" />
            </div>
            {/* Главный баннер */}
            <section className="billboard">
                <img src={moviesWithDetails[0].poster} alt="Featured" className="billboard-backdrop" />
                <div className="billboard-gradient" />
                <div className="billboard-info">
                    <h1 className="billboard-title">{moviesWithDetails[0].title}</h1>
                    <p className="billboard-synopsis">{moviesWithDetails[0].description}</p>
                    <div className="billboard-controls">
                        <button className="play-button">Play</button>
                        <button className="info-button">More Info</button>
                    </div>
                </div>
            </section>

            {/* Карусели — ЧИСТЫЕ, БЕЗ ТЕКСТА НА СТРЕЛКАХ */}
            <main className="content-section">
                {rows.map((row, index) => (
                    <section key={index} className="title-row">
                        <h2 className="row-label">{row.title}</h2>
                        <div className="row-wrapper">
                            {/* Стрелки — только иконки, без текста */}
                            <button
                                className="nav-arrow nav-prev"
                                onClick={() => scrollRow(index, "left")}
                                aria-label="Previous titles"
                            >
                                Left Arrow
                            </button>

                            <div className="titles-slider" ref={(el) => (rowRefs.current[index] = el)}>
                                {row.items.map((movie, i) => (
                                    <div
                                        key={`${movie.id}-${index}-${i}`}
                                        className="title-card-wrapper"
                                        onClick={() => setSelectedMovie(movie)}
                                    >
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            className="title-card"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                className="nav-arrow nav-next"
                                onClick={() => scrollRow(index, "right")}
                                aria-label="Next titles"
                            >
                                Right Arrow
                            </button>
                        </div>
                    </section>
                ))}
            </main>

            <Footer />

            {/* Модальное окно */}
            {selectedMovie && (
                <div className="title-modal-overlay" onClick={() => setSelectedMovie(null)}>
                    <article className="title-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close"
                            onClick={() => setSelectedMovie(null)}
                            aria-label="Close"
                        >
                            {/* Никакого текста — только иконка через CSS */}
                        </button>
                        <img src={selectedMovie.poster} alt={selectedMovie.title} className="modal-hero" />
                        <div className="modal-body">
                            <h1 className="modal-title">{selectedMovie.title}</h1>
                            <div className="modal-metadata">
                                <span className="match-score">{selectedMovie.match}% Match</span>
                                <span className="release-year">{selectedMovie.year}</span>
                                <span className="duration">{selectedMovie.duration}</span>
                                <span className="age-rating-badge">{selectedMovie.rating}</span>
                            </div>
                            <p className="modal-synopsis">{selectedMovie.description}</p>
                            <div className="modal-actions">
                                <button className="play-large">Play</button>
                                <button className="add-to-list">+ My List</button>
                            </div>
                        </div>
                    </article>
                </div>
            )}
        </div>
    );
}