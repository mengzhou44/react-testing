import { saveComment } from 'actions/comments-action';

import * as types from 'actions/_types';

describe('save comment', () => {
  it('has correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(types.SAVE_COMMENT);
  });

  it('has correct payload', () => {
    const action = saveComment('new comment');
    expect(action.payload).toEqual('new comment');
  });
});
