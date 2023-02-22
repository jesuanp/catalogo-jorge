export default (state, action) => {
    switch(action.type){

        case 'GET_PROJECTS': return {
            ...state,
            projects: action.payload
        }

        case 'POST_PROJECTS': return {
            ...state,
            projects: [...state.projects, action.payload]
        }

        case 'PUT_PROJECTS': return {
            ...state,
            projects: state.projects.map(e => e.id === action.payload.id ? action.payload : e)
        }

        case 'EDIT_CURRENT_PROJECT': return {
            ...state,
            currentProject: action.payload
        }

        case 'DELETE_PROJECT': return {
            ...state,
            projects: state.projects.filter(e => e.id !== parseInt(action.payload.id))
        }

        case 'GET_PROJECT_BY_ID': return {
            ...state,
            project: action.payload
        }

        default: return state;
    }
}