import { ActionTypes } from "../constants/action-type";

//Create actions from the action types

export const loadUniversities = (universities) =>{
      return {
            type: ActionTypes.LOAD_UNIVERSITIES,
            payload: universities,
      };
};

export const addUniversities = (university) =>{
      return {
            type: ActionTypes.ADD_UNIVERSITY,
            payload: university,
      };
};