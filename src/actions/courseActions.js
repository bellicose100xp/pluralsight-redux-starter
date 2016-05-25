import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadCoursesSuccess = courses => ({
  type: types.LOAD_COURSES_SUCCESS,
  courses
});

export const createCourseSuccess = course => ({
  type: types.CREATE_COURSES_SUCCESS,
  course
});

export const updateCourseSuccess = course => ({
  type: types.UPDATE_COURSES_SUCCESS,
  course
});

export const loadCourses = () => dispatch => {
  dispatch(beginAjaxCall());
  return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(err => {
      dispatch(ajaxCallError());
      throw(err);
    });
};

export const saveCourse = courseToSave => dispatch => {
  // this is to save the initial state of courseToSave
  // as after calling courseApi.saveCourse(courseToSave)
  // it's values changes, probably due to closure scope or something
  dispatch(beginAjaxCall());
  const courseTemp = Object.assign({}, courseToSave);
  return courseApi.saveCourse(courseToSave)
    .then(course => {
      courseTemp.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(err => {
      dispatch(ajaxCallError());
      throw(err);
    });
};
