// src/pages/Profiles.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profiles.css";
import { Profile1, Profile2, Profile3, Profile4 } from "../../assets";


export default function Profiles() {
    const navigate = useNavigate();

    useEffect(() => {
        // Проверяем, залогинен ли пользователь
        if (localStorage.getItem("isAuthenticated") !== "true") {
            navigate("/login", { replace: true });
        }
    }, [navigate]);

    // Если не залогинен — ничего не рендерим (редирект уже пошёл)
    if (localStorage.getItem("isAuthenticated") !== "true") {
        return null;
    }

    // ЭТО ДОЛЖНО ПОЯВИТЬСЯ НА ЭКРАНЕ
    return (
        <div
            style={{
                backgroundColor: "#000",
                color: "#fff",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "60px",
                fontWeight: "bold",
            }}
        >
            HELLO WORLD — Ты успешно вошёл!
        </div>
    );
}