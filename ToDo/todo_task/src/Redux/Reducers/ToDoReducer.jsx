import * as types from '../config/types';
import Task from '../config/Task';

const initialState = {
  totalTasks:[
    new Task(1,'new task','this is the new task')
    // id,
    // title,
    // desc = "",
    // date = new Date(),
    // createdDate = new Date(),
    // createdTime = new Date()
  ],
};

export const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ADDED_TODO:
        return{
            
        }
    default:
      return state;
  }
};
