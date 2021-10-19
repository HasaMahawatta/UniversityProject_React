import { combineReducers } from "redux";
import { universityReducer } from "./universityReducer";

//combine the reducers
const reducers = combineReducers({
      allUniversities:universityReducer, 
});

export default reducers;