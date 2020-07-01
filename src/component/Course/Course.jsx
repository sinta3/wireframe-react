import React from "react";
import "./Course.css";
function Course({ videoUrl, courseName, desc, src }) {
    return (
        <div className="card">
            <br />
            <br />
            <br />
            <div className="content">
                <div>
                    <iframe
                        title="Youtubes"
                        width="160"
                        height="100"
                        src={videoUrl}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <div>
                    <p>
                        <strong>{courseName}</strong>
                        <br />
                        {desc}
                    </p>
                </div>
                <div className="img">
                    <img src={src} alt="ava" width="30px" />
                </div>
            </div>
        </div>
    );
}

export default Course;
