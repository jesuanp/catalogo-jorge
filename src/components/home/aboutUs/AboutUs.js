import React from "react";
import s from './aboutUs.module.css';


export default function AboutUs() {

    return (
        <div className={s.container}>
            <div>
                <h2>ABOUT US</h2>
                <p>Esse Lorem ea laboris ut sunt eiusmod anim dolore exercitation. Voluptate magna ad et culpa mollit dolore aute ea deserunt non adipisicing. Ex mollit qui aliquip in laborum sit ex. Nisi reprehenderit duis ipsum nisi anim aliquip laborum aliquip dolore exercitation. Velit id duis magna nostrud. Sit est ea magna non commodo. Et fugiat ex dolor laborum anim ullamco nisi. Eiusmod in sunt et irure occaecat duis laboris enim exercitation nulla.</p>
            </div>

            <div className={s.divVideo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>
            </div>
        </div>
    )
}