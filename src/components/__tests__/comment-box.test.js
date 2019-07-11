import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/comment-box';
import Root from 'root';

let wrapped;
beforeEach(() => {
  wrapped = mount(<Root><CommentBox /> </Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('should contain text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', ()=> {
    beforeEach(()=> {
        wrapped.find('textarea').simulate('change', { target: { value: 'abc' } });
        wrapped.update();
      
    });

    it('has a text area that users can type in', () => {
 
        expect(wrapped.find('textarea').prop('value')).toEqual('abc');
      });
      
      it('when the input is submitted, text area should get emptied.', () => {
       
          expect(wrapped.find('textarea').prop('value')).toEqual('abc');
      
          wrapped.find('form').simulate('submit');
          wrapped.update();
      
          expect(wrapped.find('textarea').prop('value')).toEqual('');
      
        });
});

