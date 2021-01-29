import { combineReducers, applyMiddleware, createStore,compose } from "redux";
import { ToDoReducer } from "./Reducers/ToDoReducer";
// import createSagaMiddleWare from "redux-saga";
// import { transferReducer } from "./reducers/transferReducer";
// import rootSaga from "./saga/rootSaga";
// import { beneficiaryReducer } from "./reducers/BenenficiaryReducer";
// import { recentReducer } from "./reducers/RecentPayReducer";

// const saga = createSagaMiddleWare()

const rootReducer = combineReducers({
  data: ToDoReducer,
  
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer,composeEnhancers(applyMiddleware(saga)));
const store = createStore(rootReducer);
// saga.run(rootSaga);
console.log("fetched store", store.getState());
export default store;
