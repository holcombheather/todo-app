import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Group, Pagination } from '@mantine/core';


const List = ({ list, toggleComplete }) => {
  const { itemsPerScreen, hideCompleted } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = hideCompleted ? list.filter(item => !item.complete) : list;
  const startIndex = (currentPage - 1) * itemsPerScreen;
  const endIndex = startIndex + itemsPerScreen;
  const displayedList = filteredList.slice(startIndex, endIndex);

  const totalPage = Math.ceil(filteredList.length / itemsPerScreen);
  return (
    <>
      <h1>List</h1> 
      {displayedList.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
     <Pagination.Root total={totalPage} initialPage={currentPage} onPageChange={setCurrentPage}>
      <Group spacing={5} position="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
    </>
  );
};

export default List;