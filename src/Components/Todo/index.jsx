import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { Header, SimpleGrid, createStyles, Navbar, Container, Space, Stack, Paper, Text, Input, Button, Slider, Title } from '@mantine/core';


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

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      <Container>
        <Space h="md" />
        <header data-testid="todo-header">
          <Header className={classes.header}>
            <Title order={4} data-testid="todo-h1">To Do List: {incomplete} items pending</Title>
          </Header>
        </header>
        <Space h="md" />
        {/* leave the form code inside of the Todo Component */}
        <SimpleGrid cols={2} spacing="sm" verticalSpacing="lg">
          <div>
            <Paper padding="lg" radius="sm" withBorder p="md">

              <form onSubmit={handleSubmit}>
                <Stack >
                  <Title order={3}>Add To Do Item</Title>

                  <label>
                    <Text fz="sm" fw={500}>To Do Item</Text>
                    <Input size="sm" onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                  </label>

                  <label>
                    <Text fz="sm" fw={500}>Assigned To</Text>
                    <Input size="sm" onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
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
          </div>
          <div>
            <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Todo;