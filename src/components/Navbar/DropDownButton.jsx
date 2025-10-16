import "./DropDownButton.css";
import { useState } from "react";

function DropDownButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown-wrapper">
            <button
                className="dropdown-toggle"
                onClick={() => setOpen((prev) => !prev)}
            >
                Language {open ? "▴" : "▾"}
            </button>
            <div className={`dropdown-content ${open ? "show" : ""}`}>
                <a href="#">English</a>
                <a href="#">Polski</a>
            </div>
        </div>
    );
}

export default DropDownButton;
