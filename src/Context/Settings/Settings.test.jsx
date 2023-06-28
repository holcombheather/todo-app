import { render, screen } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from './index';

test('SettingsContext provides the correct default values', () => {
  render(
    <SettingsProvider>
      <SettingsContext.Consumer>
        {({ itemsPerScreen, hideCompleted, sortBy }) => (
          <>
          <div>{itemsPerScreen}</div>
          <div>{hideCompleted.toString()}</div>
          <div>{sortBy}</div>
          </>
        )}
      </SettingsContext.Consumer>
    </SettingsProvider>
  );

  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('true')).toBeInTheDocument();
  expect(screen.getByText('difficulty')).toBeInTheDocument();
});