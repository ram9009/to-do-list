import { ADD_TASK,  } from '../config/actionTypes'


export const addTaskAction = (data) => {
    return {
        type: ADD_TASK,
        data
    }
}

