import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

import {Provider} from 'react-redux';
import configureStore from "./services/configureStore";

test('Check app existence', () => {
  const mockStore = configureStore()
  render(<Provider store={mockStore}><App/></Provider>);
  const appContainer = screen.getByTestId("app-container");
  expect(appContainer).toBeInTheDocument();
})

