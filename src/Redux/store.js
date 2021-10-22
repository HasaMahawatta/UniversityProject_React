import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Create the store
const store = createStore(
      reducers,
      {},
      composeEnhancers(
          applyMiddleware(thunk)
      )
  )

export default store;
