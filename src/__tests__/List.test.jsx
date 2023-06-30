import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './index';
import { SettingsContext, SettingsProvider } from '../Context/Settings';
import mockData from '../../mock/tasks';

test('List component renders correct number of items per page', () => {
  const itemsPerScreen = 3;
  render(
    <SettingsProvider>
      <SettingsContext.Provider value={{ itemsPerScreen, hideCompleted: false, sortBy: 'difficulty' }}>
        <List list={mockData} />
      </SettingsContext.Provider>
    </SettingsProvider>
  );

  const items = screen.getAllByTestId('task-item');
  expect(items.length).toBe(itemsPerScreen);
});

test('List component does not show completed tasks when hideCompleted is true', () => {
  render(
    <SettingsProvider>
      <SettingsContext.Provider value={{ itemsPerScreen: mockData.length, hideCompleted: true, sortBy: 'difficulty' }}>
        <List list={mockData} />
      </SettingsContext.Provider>
    </SettingsProvider>
  );

  const completedItems = mockData.filter(task => task.complete);
  completedItems.forEach(item => {
    expect(screen.queryByText(item.text)).not.toBeInTheDocument();
  });
});

test('List component integrates with Pagination correctly', () => {
  const itemsPerScreen = 1;
  render(
    <SettingsProvider>
      <SettingsContext.Provider value={{ itemsPerScreen, hideCompleted: false, sortBy: 'difficulty' }}>
        <List list={mockData} />
      </SettingsContext.Provider>
    </SettingsProvider>
  );

  const firstItem = screen.getByText(mockData[0].text);
  expect(firstItem).toBeInTheDocument();

  const nextButton = screen.getByRole('button', { name: /next/i });
  userEvent.click(nextButton);

  const secondItem = screen.getByText(mockData[1].text);
  expect(secondItem).toBeInTheDocument();
  expect(firstItem).not.toBeInTheDocument();

  const prevButton = screen.getByRole('button', { name: /previous/i });
  userEvent.click(prevButton);

  expect(firstItem).toBeInTheDocument();
  expect(secondItem).not.toBeInTheDocument();
});

test('List component sorts items by difficulty by default', () => {
  const itemsPerScreen = mockData.length;
  render(
    <SettingsProvider>
      <SettingsContext.Provider value={{ itemsPerScreen, hideCompleted: false, sortBy: 'difficulty' }}>
        <List list={mockData} />
      </SettingsContext.Provider>
    </SettingsProvider>
  );

  const items = screen.getAllByTestId('task-item');
  const difficulties = items.map(item => parseFloat(item.querySelector('small').textContent.split(': ')[1]));
  expect(difficulties).toEqual([...difficulties].sort((a, b) => a - b));
});

test('List component can sort by other keys', () => {
  const itemsPerScreen = mockData.length;
  const sortBy = 'dueDate';
  render(
    <SettingsProvider>
      <SettingsContext.Provider value={{ itemsPerScreen, hideCompleted: false, sortBy }}>
        <List list={mockData} />
      </SettingsContext.Provider>
    </SettingsProvider>
  );

  const items = screen.getAllByTestId('task-item');
  const dueDates = items.map(item => new Date(item.querySelector(`[data-testid="${sortBy}"]`).textContent));
  expect(dueDates).toEqual([...dueDates].sort((a, b) => a - b));
});
