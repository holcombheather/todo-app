import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';

const List = ({ list, toggleComplete }) => {
  const { itemsPerScreen, hideCompleted } = useContext(SettingsContext);

  const displayedList = list.slice(0, itemsPerScreen);

  const finalList = hideCompleted ? displayedList.filter(item => !item.complete) : displayedList;

  return (
    <>
      <h1>List</h1> 
      {finalList.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default List;