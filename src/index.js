import React from 'react';
import ReactDOM from 'react-dom';
 
import Root from './root';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);

serviceWorker.unregister();
