import { render, screen } from '@testing-library/react';
import List from './index';
import { SettingsContext, SettingsProvider } from '../Context/Settings';
import mockData from '../../mock/tasks'; // TODO: create mockData containing mock todo items

test('List component renders correct number of items per page', () => {
  render(
    <SettingsProvider>
      <SettingsContext.Consumer>
        {({ itemsPerScreen }) => (
          <List tasks={mockData.slice(0, itemsPerScreen)} />
        )}
      </SettingsContext.Consumer>
    </SettingsProvider>
  );

  const items = screen.getAllByTestId('task-item');
  expect(items.length).toBe(3);
});

test('List component does not show completed tasks', () => {
  render(
    <SettingsProvider>
      <SettingsContext.Consumer>
        {({ hideCompleted }) => (
          <List tasks={mockData} hideCompleted={hideCompleted} />
        )}
      </SettingsContext.Consumer>
    </SettingsProvider>
  );

  const completedItems = mockData.filter(task => task.completed);
  completedItems.forEach(item => {
    expect(screen.queryByText(item.title)).not.toBeInTheDocument();
  });
});

test('List component integrates with Pagination correctly', () => {
  // TODO: test that clicking the "next" button will bring up new item
  // TODO: test that clicking the "previous" button will bring back previous item
});

test('List component sorts items by difficulty by default', () => {
  render(
    <SettingsProvider>
      <List tasks={mockData} />
    </SettingsProvider>
  );

  // TODO: finish test for proper sorting and display 
});

test('List component can sort by other keys', () => {
  render(
    <SettingsProvider>
      <List tasks={mockData} sortBy='dueDate' />
    </SettingsProvider>
  );

  // TODO: finish test for proper sort function 
})