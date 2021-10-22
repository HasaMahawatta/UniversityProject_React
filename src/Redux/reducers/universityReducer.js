import { ActionTypes } from "../constants/action-type";

//define the initial state
const initialState = {
      universities: [],
}; 

//create the reducer
export const universityReducer = (state = initialState, { type, payload }) => {

      switch (type) {
            case ActionTypes.LOAD_UNIVERSITIES:
                  return { ...state, universities: payload, isLoading: false };

      
            case ActionTypes.LOAD_UNIVERSITIES:
                  return {...state,  universities: payload}; 

            case ActionTypes.ADD_UNIVERSITY:
                  const current_list = state.universities;
      
      
                  const current_list_cpy = JSON.parse(JSON.stringify(current_list));
                  if (current_list_cpy.length > 0) {
                         current_list_cpy.push(current_list_cpy[0]);
                   }
      
      
                  //                  const remove_first = current_list_cpy.splice(0, 1);
      
                  //                  current_list_cpy.push(remove_first[0]);
      
                  return {
                        ...state,
                        universities: current_list_cpy
                  };

                  
                  
      
            default:
                  return state;
      }
};