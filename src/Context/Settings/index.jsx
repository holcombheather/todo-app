import React, { useState } from 'react';

// create context
export const SettingsContext = React.createContext();


// create a provider
function SettingsProvider({ children }) {
  // TODO: we will use setters tomorrow!
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [sortBy, setSortBy] = useState('difficulty');


  // ToDo: can do more calculations here
  // TODO: useReducer to micromanage state

  // context is THIS object
  const values = {
    itemsPerScreen,
    hideCompleted,
    sortBy
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
