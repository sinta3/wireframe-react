import React from "react";
import "./StudentInfo.css";

function StudentInfo({ name, status, bio }) {
    return (
        <div>
            <h3>
                <strong>{name}</strong>
            </h3>
            <h4>{status}</h4>
            <p>{bio}</p>
        </div>
    );
}

export default StudentInfo;
