import React from "react";
import s from './project.module.css';
import image13 from '../../images/image-robot-13.jpeg';
import image14 from '../../images/image-robot-14.jpeg';

export default function Project() {

    return (
        <div className={s.container}>
            <h1>Name Project</h1>

            <div style={{width: '16rem', marginBottom: '2rem'}}>
                <img className={s.img} src={image13} alt='imagen del proyecto' />

                <p>Mollit excepteur aliqua anim ipsum do exercitation aliqua aute.</p>
            </div>

            <div className={s.descriptionProject}>
                <img className={s.img} style={{width: '21rem'}} src={image14} alt='imagen del proyecto' />

                <p>Esse ullamco ullamco duis cillum qui do esse velit occaecat est cillum tempor commodo. Dolore pariatur deserunt velit excepteur laborum id id culpa Lorem. Aliqua velit ad et anim sint laborum veniam. Cupidatat est pariatur ex excepteur commodo sit magna aliqua sunt. Et enim nostrud do laboris deserunt.</p>
            </div>

            <div className={s.divVideo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>
            </div>

        </div>
    )
}