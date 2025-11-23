// src/pages/Profiles.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profiles.css";
import { avatars } from "../../assets";


export default function Profiles() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("isAuthenticated") !== "true") {
            navigate("/login", { replace: true });
        }
    }, [navigate]);

    if (localStorage.getItem("isAuthenticated") !== "true") {
        return null;
    }

    const handleSelectProfile = () => {
        // Пока просто переходим на главную страницу Netflix
        navigate("/browse");
    };

    return (
        <div className="profiles-container">
            <h1 className="profiles-title">Who's watching?</h1>
            <div className="profiles-grid">
                {avatars.map((avatar) => (
                    <div
                        key={avatar.id}
                        className="profile-item"
                        onClick={handleSelectProfile}
                    >
                        <div className="profile-avatar">
                            <img src={avatar.img} alt={avatar.name} />
                        </div>
                        <span className="profile-name">{avatar.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}