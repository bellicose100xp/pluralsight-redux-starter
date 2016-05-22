import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    reduxImmutableStateInvariant()
  )
);

export default configureStore();
