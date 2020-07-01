import React, { Component } from "react";
import "./Profil.css";
import img from "../assets/avatar.JPG";
import Avatar from "../component/Avatar/Avatar";
import StudentInfo from "../component/StudentInfo/StudentInfo";
import Course from "../component/Course/Course";

export default class Profil extends Component {
    state = {
        name: "Sinta Tri Astuti",
        status: "Bootcamp Student",
        bio: "Keep Learning",

        card: [
            {
                videoUrl: "https://www.youtube.com/embed/NBZ9Ro6UKV8",
                courseName: "HTML",
                desc: "Pendahuluan mengenai HTML ",
            },
            {
                videoUrl: "https://www.youtube.com/embed/hxSddfuYQ1k",
                courseName: "Web Development",
                desc: "  Jalur Belajar seorang Web Developer",
            },
        ],
    };

    render() {
        let cards = this.state.card.map((e) => (
            <Course
                videoUrl={e.videoUrl}
                courseName={e.courseName}
                desc={e.desc}
                src={img}
            />
        ));
        return (
            <>
                <div className="header">
                    <Avatar src={img} />
                    <StudentInfo
                        name={this.state.name}
                        status={this.state.status}
                        bio={this.state.bio}
                    />
                </div>
                <h4>My Course</h4>
                <div className="content">{cards}</div>
            </>
        );
    }
}
