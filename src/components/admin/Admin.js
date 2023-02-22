import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import ProjectsContext from '../../context/ProjectsContext';
import { clienteAxios } from '../../config/axios';
import s from './admin.module.css';
import Modal from './Modal';

export default function Admin() {

    const { projects, getProjects, editCurrentProject, deleteProject } = useContext(ProjectsContext);

    const [showModal, setShowModal] = React.useState(false);
    const [typeModal, setTypeModal] = React.useState('addProject');

    const handleClick = (boolean, type, project) => {
        
        if(project){
            editCurrentProject(project);
        }
        
        setShowModal(boolean);
        setTypeModal(type);
    }

    React.useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className={s.container}>

            {
                !clienteAxios.defaults.headers.common['password']
                && <Navigate to='/auth' replace={true} />
            }

            <h1 style={{textAlign: 'center'}}>Admin</h1>

            <div onClick={() => handleClick(true, 1)} className={s.addProject}>
                <span>Agregar un projecto +</span>
            </div>

            {
                projects && projects.map(e => (
                    <div className={s.card} key={e.id}>
                        <div style={{display: 'flex'}}>
                            <div className={s.divImg}>
                                <img className={s.img} src={e.imgUrl} alt='imagen del proyecto' />
                            </div>
                            <div >
                                <h3 style={{marginBottom: '1rem', marginTop: 0}}>{e.name}</h3>
                                <p>{e.text}</p>
                            </div>
                        </div>
                        <div className={s.buttons}>
                            <div id='edit-project' onClick={() => handleClick(true, 2, e)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                            </div>
                            <div id='delete-project' onClick={() => deleteProject(e.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg>
                            </div>
                        </div>
                    </div>
                ))
            }

            {
                showModal && <Modal setShowModal={setShowModal} typeModal={typeModal} />
            }

        </div>
    )
}
