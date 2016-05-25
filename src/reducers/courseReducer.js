import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSES_SUCCESS:
     // console.log('inside reducer...', action.course);
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSES_SUCCESS:
      return [...state.map(course => course.id === action.course.id ?
        Object.assign({}, action.course) : course)];

    default:
      return state;
  }
};
