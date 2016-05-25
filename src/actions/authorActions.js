import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadAuthorsSuccess = authors => ({type: types.LOAD_AUTHORS_SUCCESS, authors});

export const loadAuthors = () => dispatch => {
  dispatch(beginAjaxCall());
  return AuthorApi.getAllAuthors().then(authors => {
    dispatch(loadAuthorsSuccess(authors));
  }).catch(err => {
    dispatch(ajaxCallError());
    throw(err);
  });
};
