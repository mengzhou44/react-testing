import React from 'react';

import { mount } from 'enzyme';

import App from 'components/app';
import Root from 'root';
import CommentBox from 'components/comment-box';
import CommentList from 'components/comment-list';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it('should render a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('should render a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
