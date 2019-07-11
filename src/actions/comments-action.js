import axios from 'axios';

import * as types from './_types';

export const fetchComments = () => {
  const res = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: types.FETCH_COMMENTS,
    payload: res
  };
};

export const saveComment = comment => {
  return {
    type: types.SAVE_COMMENT,
    payload: comment
  };
};
