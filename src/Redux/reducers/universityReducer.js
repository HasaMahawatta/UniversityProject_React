import { ActionTypes } from "../constants/action-type";

//define the initial state
const initialState = {
      universities: [{
            id:1,
            title: "Hasanka",
            category: "programmer",
      },],
}; 

//create the reducer
export const universityReducer = (state=initialState, {type, payload}) =>{

      switch (type) {
            case ActionTypes.LOAD_UNIVERSITIES:
                  return state
                  
      
            default:
                  return state;
      }
};