import React  from "react";
import { fetchUniversities, addUniversities, removeUniversities } from "../Redux/actions/universityActions";
import { useDispatch } from "react-redux";



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