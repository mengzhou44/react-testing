import commentsReducer from 'reducers/_comments';
import * as types from 'actions/_types';

it('should handle action SAVE_COMMENT', () => {
  const action = {
    type: types.SAVE_COMMENT,
    payload: 'new comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['new comment']);
});

it('should handle action of unknown type', () => {
    const action = {
      type: 'UNKNOWN',
      payload: 'new comment'
    };
  
    const newState = commentsReducer([], action);
  
    expect(newState).toEqual([]);
  });
