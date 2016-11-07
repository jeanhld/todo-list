import '../css/main.css';

import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './containers';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

render(<Provider store={store}>
    <TodoList />
  </Provider>, document.getElementById('container'));
