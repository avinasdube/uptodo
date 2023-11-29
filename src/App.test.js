// IMPORTING NECESSARY TESTING LIBRARIES/DEPENDENCIES

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

// CREATING A MOCK REDUX STORE USING 'redux-mock-store'
const mockStore = configureStore();

// DESCRIBING THE TEST SUITE FOR THE APP COMPONENT
describe('App component', () => {

  // DESCRIBING SPECIFIC TEST CASE THAT RENDERS NAVBAR AND TASKLIST COMPONENTS
  test('renders Navbar and TaskList by default', async () => {

    // DEFINING INITIAL STATE FOR REDUX STORE
    const initialState = {
      todos: {
        todos: [],
      },
      filtars: {},
    };

    // CREATING A MOCK REDUX STORE USING THE INITIAL STATE
    const store = mockStore(initialState);

    // RENDERING APP COMPONENT WITH MOCK REDUX STORE
    render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    );

    // EXPECTING THAT NAVBAR IS RENDERED (BY CHECKING FOR AN ELEMENT WITH 'data-testid' = 'navbar' IN THE DOCUMENT)
    expect(screen.getByTestId('navbar')).toBeInTheDocument();

    // EXPECTING THAT TASKLIST IS RENDERED (BY CHECKING FOR AN ELEMENT WITH 'data-testid' = 'task-list' IN THE DOCUMENT)
    expect(screen.getByTestId('task-list')).toBeInTheDocument();
  });
});
