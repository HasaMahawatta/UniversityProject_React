import { ActionTypes } from "../constants/action-type";

//define the initial state
const initialState = {
      universities: [],
}; 

//create the reducer
export const universityReducer = (state=initialState, {type, payload}) =>{

      switch (type) {
            case ActionTypes.LOAD_UNIVERSITIES:
                  return {...state,  universities: payload}; 
                  
      
            default:
                  return state;
      }
};