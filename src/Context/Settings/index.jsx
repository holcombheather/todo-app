import React, { useState, useEffect } from 'react';

// create context
export const SettingsContext = React.createContext();


// create a provider
function SettingsProvider({ children }) {
  // TODO: we will use setters tomorrow!
  const [itemsPerScreen, setItemsPerScreen] = useState(localStorage.getItem('itemsPerScreen') || '3');
  const [hideCompleted, setHideCompleted] = useState(localStorage.getItem('hideCompleted') === 'true' || false);
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'difficulty');
  // const [itemsPerScreen, setItemsPerScreen] = useState(localStorage.getItem('itemsPerScreen'));
  // const [hideCompleted, setHideCompleted] = useState(localStorage.getItem('hideCompleted'));
  // const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy'));



  useEffect(() => {
    localStorage.setItem('itemsPerScreen', itemsPerScreen);
    localStorage.setItem('hideCompleted', hideCompleted);
    localStorage.setItem('sortBy', sortBy);
  }, [itemsPerScreen, hideCompleted, sortBy])
  // ToDo: can do more calculations here
  // TODO: useReducer to micromanage state

  // context is THIS object
  const values = {
    itemsPerScreen,
    setItemsPerScreen,
    hideCompleted,
    setHideCompleted,
    sortBy,
    setSortBy
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
