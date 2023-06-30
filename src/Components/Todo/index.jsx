import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form';
import { Header, Grid, createStyles, Container, Space, Stack, Paper, Text, Button, Slider, Title, TextInput } from '@mantine/core';
import Auth from '../Auth/index';
import { SettingsContext } from '../../Context/Settings';


import { v4 as uuid } from 'uuid';

import List from '../List';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[4],
    padding: theme.spacing.md,
    color: theme.colors.gray[0],
  }
}));

const Todo = () => {
  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const { hideCompleted } = useContext(SettingsContext);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setList(savedTodos);
    }
  }, []);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    const newList = [...list, item];
    setList(newList);

    localStorage.setItem('todos', JSON.stringify(newList));
  }

  function deleteItem(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);

    localStorage.setItem('todos', JSON.stringify(newList));
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

    localStorage.setItem('list', JSON.stringify(items));
  }

  function toggleIncomplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = false;
      }
      return item;
    });

    setList(items);

    localStorage.setItem('list', JSON.stringify(items));
}

  useEffect(() => {
    // Load items from local storage and set the list state
    const itemsFromStorage = localStorage.getItem('list');
    if (itemsFromStorage) {
      setList(JSON.parse(itemsFromStorage));
    }
    }, []);

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incompleteCount}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      <Container size="lg">
        <Space h="md" />
        <header data-testid="todo-header">
          <Header className={classes.header}>
            <Title order={4} data-testid="todo-h1">To Do List: {incomplete} items pending</Title>
          </Header>
        </header>
        <Space h="md" />
        
        {/* leave the form code inside of the Todo Component */}
        <Grid cols={2} spacing="sm" verticalSpacing="lg">
        <Auth capability="create">
          <Grid.Col span={4}>
            <Paper padding="lg" radius="sm" withBorder p="md">
              <form onSubmit={handleSubmit}>
                <Stack >
                  <Title order={3}>Add To Do Item</Title>
                  <label>
                    <Text fz="sm" fw={500}>To Do Item</Text>
                    <TextInput size="sm" onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                  </label>

                  <label>
                    <Text fz="sm" fw={500}>Assigned To</Text>
                    <TextInput size="sm" onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                  </label>

                  <label>
                    <Text fz="md">Difficulty</Text>
                    <Slider onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
                  </label>

                  <label>
                    <Button size="sm" type="submit">Add Item</Button>
                  </label>

                </Stack>
              </form>
            </Paper>
          </Grid.Col>
        </Auth>
          <Grid.Col span="auto">
            <List list={list} toggleComplete={toggleComplete} toggleIncomplete={toggleIncomplete} deleteItem={deleteItem} hideCompleted={hideCompleted} />
          </Grid.Col>

        </Grid>
      </Container>
    </>
  );
};

export default Todo;