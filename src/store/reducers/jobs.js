const initialState = {
    jobs: [],
}

const jobsReducer = (state = initialState, action) => {
    if (!action || !action.type) {
        console.log('jobs reducer: action or action.type is undefined');
        return state;
    }
    switch (action.type) {
        case 'SET_JOBS':
            return{
                ...state,
                jobs: action.jobs
            }
        case 'ADD_JOB':
            return{
                ...state,
                jobs: [...state.jobs, action.job]
            }
        case 'APPLY_JOB':
            return{
                ...state,
                jobs: state.jobs.filter(job => job.id !== action.id)
            }
            case 'UPDATE_JOB':
                return{
                    ...state,
                    jobs: state.jobs.map(job => job.id === action.id ? action.updatedJob  : job)
                }
        case 'DELETE_JOB':
            return{
                ...state,
                jobs: state.jobs.filter(job => job.id !== action.id)
            }

        default:
            console.log(`Action type ${action.type} not found`);
            return state;
    }
}

export default jobsReducer;