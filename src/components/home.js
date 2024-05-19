import React from "react";
import homepic from "../images/home-pic.png";

export default function Home() {
    return(
        <div className="page">
            <div>
                <img className="home-pic" src={homepic} />
            </div>
            <div className="text-on-image">
                <h1>SUPERCHARGED CLEAN ARTISTRY MAKEUP</h1>
            </div>
        </div>
    );
}