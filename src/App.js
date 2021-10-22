import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import UniversitiesListing from "./Components/UniversitiesListing";
import Buttons from "./Components/Buttons";


function App() {
  return (
    <div className="App">
      <Buttons />
      <Router>
         <Route path = "/" exact component={UniversitiesListing} /> {/*Path to the selector  */}
      </Router>
      
      
    </div>
  );
}

export default App;
