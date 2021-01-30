import React from 'react';
import ReactDOM from 'react-dom';
import SearchOptions from './SearchOptions';
import { BrowserRouter, Route } from 'react-router-dom';

describe('EditGiftPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/find-barber'} component={SearchOptions} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});