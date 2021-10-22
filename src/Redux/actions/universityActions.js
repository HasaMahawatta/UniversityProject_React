import { ActionTypes } from "../constants/action-type";
import axios from "axios";

//Async-action creator
export const fetchUniversities = () => async (dispatch) => {
      try {
            
            const response = await axios.get("http://universities.hipolabs.com/search?country=Australia")
            dispatch({
                  type: ActionTypes.LOAD_UNIVERSITIES,
                  payload: response.data,
            })
      } catch (err) {
            dispatch({
                  type: 'ERR',
                  payload: err.message
            })
      }
};

export const addUniversities = () => {
      return {
            type: ActionTypes.ADD_UNIVERSITY
      };
};

export const removeUniversities = () => {
      return {
            type: ActionTypes.REMOVE_UNIVERSITY
      };
};

