import React from 'react';
import s from './modal.module.css';
import ProjectsContext from '../../context/ProjectsContext';

export default function Modal ({setShowModal, typeModal}) {

    const { addProject, editProject, currentProject } = React.useContext(ProjectsContext);

    const [state, setState] = React.useState({
        name: '',
        imgUrl: '',
        text: ''
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(state.imgUrl.trim() == '' || state.text.trim() == '' || state.name.trim() == ''){
            alert('Completa todos los campos');
            return;
        }

        if(typeModal === 2){
            editProject({...state, projectId: currentProject.id});
        }
        else {
            addProject(state);
        }

        setShowModal(false);
    }

    React.useEffect(() => {
        if(typeModal === 2){
            setState({
                name: currentProject.name,
                imgUrl: currentProject.imgUrl,
                text: currentProject.text
            });
        }
    }, []);

    return (
        <div className={s.fondo}>
            <div className={s.container}>

                <h2 style={{marginBottom: '2rem', marginTop: 0}}>{typeModal === 1 ? 'Agregar un proyecto' : 'Editar proyecto'}</h2>

                <form className={s.form} onSubmit={handleSubmit}>
                    <div>
                        <label>nombre</label>
                        <input name='name' onChange={handleChange} value={state.name} className={s.inputs} type='text' placeholder='nombre del proyecto' />
                    </div>
                    <div>
                        <label>Url de la imagen</label>
                        <input name='imgUrl' onChange={handleChange} value={state.imgUrl} className={s.inputs} type='text' placeholder='Url de la imagen' />
                    </div>
                    <div>
                        <label>descripción</label>
                        <textarea name='text' onChange={handleChange} value={state.text} className={s.inputs} type='text' rows={4} cols={26} placeholder='Descripción' />
                    </div>
                    <div style={{flexDirection: 'row'}} className={s.containerBtn}>
                        <button type='button' onClick={() => setShowModal(false)} style={{backgroundColor: 'red'}}>Cancelar</button>
                        <button type='submit' style={{backgroundColor: 'green'}}>{typeModal === 1 ? 'Agregar' : 'Editar'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}