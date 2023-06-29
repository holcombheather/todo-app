import React, { createContext, useState, useEffect } from 'react';

// create context
export const SettingsContext = createContext();


// create a provider
function SettingsProvider({ children }) {
  // const [itemsPerScreen, setItemsPerScreen] = useState(localStorage.getItem('itemsPerScreen') || '3');
  // const [hideCompleted, setHideCompleted] = useState(localStorage.getItem('hideCompleted') === 'true' || false);
  // const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'difficulty');
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [sortBy, setSortBy] = useState('difficulty');


  const saveLocally = () => {
    localStorage.setItem(
      'todo',
      JSON.stringify({itemsPerScreen, hideCompleted, sortBy})
    );
  }

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo'));
    if(storage){
      setItemsPerScreen(storage.itemsPerScreen);
      setHideCompleted(storage.hideCompleted);
      setSortBy(storage.setSortBy);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('itemsPerScreen', itemsPerScreen);
  //   localStorage.setItem('hideCompleted', hideCompleted);
  //   localStorage.setItem('sortBy', sortBy);
  // }, [itemsPerScreen, hideCompleted, sortBy])

  // ToDo: can do more calculations here
  // TODO: useReducer to micromanage state

  // context is THIS object
  const values = {
    itemsPerScreen,
    setItemsPerScreen,
    hideCompleted,
    setHideCompleted,
    sortBy,
    setSortBy,
    saveLocally
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
