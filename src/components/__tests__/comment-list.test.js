import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/comment-list';
import Root from 'root';

let wrapped;

beforeEach(() => {
  const comments = ['Comment 1', 'Comment 2'];
  wrapped = mount(
    <Root>
      <CommentList comments={comments} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('hshows text for comment', () => {
   expect(wrapped.render().text()).toContain('Comment 1');
   expect(wrapped.render().text()).toContain('Comment 2');
});