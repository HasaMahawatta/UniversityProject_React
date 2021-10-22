import React , { useCallback } from "react";
import { fetchUniversities, addUniversities, removeUniversities } from "../Redux/actions/universityActions";
import { Link } from "react-router-dom";
import Universities from "./UniversitiesListing";
import { useDispatch } from "react-redux";
import {universityReducer} from "../Redux/reducers/universityReducer";


// const component = props => {
//       return (
//           <div>
//               <button onClick={props.DisplayTable}>cool</button>
//           </div>
//       );
//   };

// function mapStateToProps(state) {
//       console.log("state", state)
// return {
//     click: state.allUniversities.universities
// };
// };


// const mapDispachToProps = (dispatch) => {
//   return {
// DisplayTable: (click) => {dispatch (loadUniversities(click));
//       },
//   };
// };

// const AppTable = connect(mapStateToProps, mapDispachToProps)(component);

// export default AppTable;

const Buttons = () => {

  const dispatch = useDispatch();

  
        

  return (
        <div > 
              

              <button onClick={() => {dispatch(fetchUniversities())}} class="ui labeled icon button primary">
              <i class="undo alternate icon"></i>
              Load Data
              </button>
              <button onClick={() => {dispatch(addUniversities())}} class="ui right labeled icon button positive">
              <i class="plus circle icon"></i>
              Add
              </button>
              <button onClick={()=>{dispatch(removeUniversities())}} class="ui right labeled icon button negative">
              <i class="right arrow icon"></i>
              Delete
              </button>
        </div>
  );
};

export default Buttons;