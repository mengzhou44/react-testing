import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';

import Root from 'root';
import App from 'components/app';
 

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }, { name: 'Fetched 3' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
        <App />
    </Root>
  );


  moxios.wait(() => {
     wrapped.update();
     expect(wrapped.find('li').length).toEqual(3);
     done();
     wrapped.unmount();
  });
  
});
