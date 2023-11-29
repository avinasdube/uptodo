// IMPORTING NECESSARY TESTING LIBRARIES/DEPENDENCIES

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleTask from '../../components/SingleTask/SingleTask';

// MOCKING THE SingleTask COMPONENT
jest.mock('../../components/SingleTask/SingleTask', () => () => <div data-testid="mock-single-task" />);

describe('TaskList component', () => {
    test('renders TaskList component with SingleTask', () => {

        // RENDERING SingleTask COMPONENT
        render(<SingleTask />);

        // EXPECTING THE SingleTask TO BE RENDERED (MOCKED VERSION)
        expect(screen.getByTestId('mock-single-task')).toBeInTheDocument();
    });
});
