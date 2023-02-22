import React, { useContext } from "react";
import s from './projects.module.css';
import image9 from '../../images/image-robot-9.jpeg';
import image10 from '../../images/image-robot-10.jpeg';
import image11 from '../../images/image-robot-11.jpeg';
import image12 from '../../images/image-robot-12.jpeg';
import { NavLink } from "react-router-dom";

import ProjectsContext from '../../context/ProjectsContext';

export default function Projects() {

    const {projects, getProjects} = useContext(ProjectsContext);

    React.useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className={s.container}>
            <h2 style={{textAlign: 'center'}}>CATALOG</h2>

            <div className={s.projects}>

                {
                    projects && projects.map(e => 
                        <div key={e.id}>
                            <NavLink className={s.navLink} to={`/project/${e.id}`}>
                                <div className={s.project}>
                                    <span className={s.nameProject}>{e.name}</span>
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        <div className={s.divImg}>
                                            <img className={s.img} src={e.imgUrl} alt='image project' />
                                        </div>
                                        <p className={s.text}>{e.text}</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )
                }


            </div>

        </div>
    )
}