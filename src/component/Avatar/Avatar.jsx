import React from "react";
import "./Avatar.css";

function Avatar({ src }) {
    return (
        <div class="ava">
            <img src={src} alt="ava" />
        </div>
    );
}

export default Avatar;
