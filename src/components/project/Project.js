import React from "react";
import s from './project.module.css';
import image14 from '../../images/image-robot-14.jpeg';
import { useParams } from 'react-router-dom';
import ProjectsContext from "../../context/ProjectsContext";

export default function Project() {

    const { project, getProjectById } = React.useContext(ProjectsContext);

    const {id} = useParams();

    React.useEffect(() => {
        if(!project || project.id !== parseInt(id)){
            getProjectById(id);
        }
    }, []);

    return (
        <div className={s.container}>
            <h1>{project.name}</h1>

            <div style={{width: '16rem', marginBottom: '2rem'}}>
                <img className={s.img} src={project.imgUrl} alt='imagen del proyecto' />

                <p>{project.text}</p>
            </div>

            <div className={s.addSection}>
                <span>Agregar otra sección</span>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg>
                </div>
            </div>

        </div>
    )
}