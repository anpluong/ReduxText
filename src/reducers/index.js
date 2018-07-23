import {ADD} from '../actions'

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:     
      // console.log(action.message)
      return [...state, action.message];
    default:
      return state;
  }
};

export default messageReducer;