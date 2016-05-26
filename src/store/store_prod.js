import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';


const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunk
  )
);

export default configureStore();
