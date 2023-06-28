import { render, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { SettingsProvider } from '../Context/Settings';
import mockData from '../mock/tasks'; // TODO: create mock data for tasks

const initialMockData = [...mockData];
const initialSettings = {
  itemsPerScreen: 3,
  hideCompleted: true,
  sortBy: 'difficulty'
};

describe('App integration tests', () => {

  test('Changing itemsPerScreen in SettingsContext affects the List display', () => {
    const { getByTestId, getByText } = render(
      <SettingsProvider>
        <App />
      </SettingsProvider>
    );

    // Simulate changing the setting

    fireEvent.change(getByTestId('items-per-screen-input'), { target: { value: '5' } });

    // Check the list now shows 5 items

    const items = within(getByTestId('task-list')).getAllByTestId('task-item');
    expect(items.length).toBe(5);
  });


  test('Hiding completed tasks in SettingsContext hides them from List', () => {
    const { getByTestId, queryByText } = render(
      <SettingsProvider value={initialSettings}>
        <App tasks={initialMockData} />
      </SettingsProvider>
    );

    // Let's say your mock data has a task named 'Completed Task' which is marked as completed

    // Initially, the completed task should not be visible
    expect(queryByText('Completed Task')).not.toBeInTheDocument();

    // Simulate changing the setting to show completed tasks
    fireEvent.click(getByTestId('show-completed-checkbox'));

    // Now the completed task should be visible
    expect(queryByText('Completed Task')).toBeInTheDocument();
  });

  test('Changing sort order in SettingsContext changes order of tasks in List', () => {
    const { getByTestId, getAllByTestId } = render(
      <SettingsProvider value={initialSettings}>
        <App tasks={initialMockData} />
      </SettingsProvider>
    );

    // Simulate changing the setting to sort by due date
    fireEvent.change(getByTestId('sort-order-select'), { target: { value: 'dueDate' } });

    // Check the tasks are now ordered by due date
    const tasks = getAllByTestId('task-item').map(el => el.textContent);
    const sortedTasks = tasks.slice().sort((a, b) => a.dueDate - b.dueDate);
    expect(tasks).toEqual(sortedTasks);
  });
});
