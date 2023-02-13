import React from "react";
import s from './projects.module.css';
import image9 from '../../images/image-robot-9.jpeg';
import image10 from '../../images/image-robot-10.jpeg';
import image11 from '../../images/image-robot-11.jpeg';
import image12 from '../../images/image-robot-12.jpeg';
import { NavLink } from "react-router-dom";

export default function Projects() {

    return (
        <div className={s.container}>
            <h2 style={{textAlign: 'center'}}>CATALOG</h2>

            <div className={s.projects}>
                <NavLink className={s.navLink} to='/project'>
                    <div className={s.project}>
                        <span className={s.nameProject}>Name project</span>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div className={s.divImg}>
                                <img className={s.img} src={image9} alt='image project' />
                            </div>
                            <p className={s.text}>Non exercitation ex proident qui anim mollit Lorem aute occaecat ut dolor Lorem tempor.</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink className={s.navLink} to='/project'>
                    <div className={s.project}>
                        <span className={s.nameProject}>Name project</span>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div className={s.divImg}>
                                <img className={s.img} src={image10} alt='image project' />
                            </div>
                            <p className={s.text}>Non exercitation ex proident qui anim mollit Lorem aute occaecat ut dolor Lorem tempor.</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink className={s.navLink} to='/project'>
                    <div className={s.project}>
                        <span className={s.nameProject}>Name project</span>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div className={s.divImg}>
                                <img className={s.img} src={image11} alt='image project' />
                            </div>
                            <p className={s.text}>Non exercitation ex proident qui anim mollit Lorem aute occaecat ut dolor Lorem tempor.</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink className={s.navLink} to='/project'>
                    <div className={s.project}>
                        <span className={s.nameProject}>Name project</span>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div className={s.divImg}>
                                <img className={s.img} src={image12} alt='image project' />
                            </div>
                            <p className={s.text}>Non exercitation ex proident qui anim mollit Lorem aute occaecat ut dolor Lorem tempor.</p>
                        </div>
                    </div>
                </NavLink>
            </div>

        </div>
    )
}