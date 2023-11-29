// IMPORTING NECESSARY TESTING LIBRARIES/DEPENDENCIES

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AddTask from './AddTask';

// MOCKING THE TaskForm COMPONENT
jest.mock('../../components/TaskForm/TaskForm', () => () => <div data-testid="mock-task-form" />);

describe('AddTask component', () => {
    test('renders AddTask component with heading and TaskForm', () => {

        // RENDERING AddTask COMPONENT
        render(<AddTask />);

        // EXPECTING THE HEADING TO BE RENDERED IN AddTask COMPONENT
        expect(screen.getByText('Create a new task')).toBeInTheDocument();

        // EXPECTING THE TaskForm TO BE RENDERED (MOCKED VERSION)
        expect(screen.getByTestId('mock-task-form')).toBeInTheDocument();
    });
});
