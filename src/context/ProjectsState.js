import { useReducer } from "react";
import ProjectsContext from "./ProjectsContext";
import ProjectsReducer from "./ProjectsReducer";
import { clienteAxios } from "../config/axios";

const ProjectsState = ({children}) => {

    const initialState = {
        projects: [],
        project: {},
        currentProject: {}
    }

    const [state, dispatch] = useReducer(ProjectsReducer, initialState);

    const getProjects = async () => {

        const response = await clienteAxios.get('/api/projects');

        dispatch({
            type: 'GET_PROJECTS',
            payload: response.data.projects
        });
    }

    const addProject = async project => {

        const response = await clienteAxios.post('/api/projects', project);

        dispatch({
            type: 'POST_PROJECTS',
            payload: response.data.project
        });
    }

    const editProject = async project => {

        const response = await clienteAxios.put('/api/projects', project);

        dispatch({
            type: 'PUT_PROJECTS',
            payload: response.data.project
        });
    }

    const editCurrentProject = project => {
        dispatch({
            type: 'EDIT_CURRENT_PROJECT',
            payload: project
        });
    }

    const deleteProject = async projectId => {
        
        const response = await clienteAxios.delete(`/api/projects/${projectId}`);

        dispatch({
            type: 'DELETE_PROJECT',
            payload: response.data.project
        });
    }

    const getProjectById = async projectId => {

        const response = await clienteAxios.get(`/api/projects/${projectId}`);

        dispatch({
            type: 'GET_PROJECT_BY_ID',
            payload: response.data.project
        })
    }

    return (
        <ProjectsContext.Provider
            value={{
                projects: state.projects,
                currentProject: state.currentProject,
                project: state.project,

                getProjects,
                addProject,
                editProject,
                editCurrentProject,
                deleteProject,
                getProjectById,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    )

}

export default ProjectsState;
