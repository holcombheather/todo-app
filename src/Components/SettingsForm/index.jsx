import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import useForm from '../../hooks/form';
import { Header, SimpleGrid, createStyles, Group, Container, Space, Stack, Paper, Text, Input, Button, Title, Switch, NumberInput } from '@mantine/core';

import { v4 as uuid } from 'uuid';



const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[4],
    padding: theme.spacing.md,
    color: theme.colors.gray[0],
  }
}));

const Todo = () => {
  const { classes } = useStyles();

  // TODO: update with functionality for 2 other reqs
  const { itemsPerScreen, setItemsPerScreen, hideCompleted, setHideCompleted, sortBy, setSortBy } = useContext(SettingsContext);

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(defaultValues);

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
            <Title order={4} data-testid="todo-h1">Manage Settings</Title>
          </Header>
        </header>
        <Space h="md" />
        {/* leave the form code inside of the Todo Component */}
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg">
          <div>
            <Paper padding="lg" radius="sm" withBorder p="md">

              <form onSubmit={handleSubmit}>
                <Stack spacing="xs">
                  <Title order={4}>Update Settings</Title>

                  <Group>
                    <Switch
                    // TODO: update state
                    checked={hideCompleted}
                    onChange={checked => setHideCompleted(checked)}
                    />
                    <Text fz="sm" >Show Completed ToDos</Text>
                  </Group>

                  <label>
                    <Text fz="sm" fw={500}>Items Per Page</Text>
                    <NumberInput size="sm" onChange={value => setItemsPerScreen(value)} name="itemsPerScreen" placeholder="20" />
                  </label>

                  <label>
                    <Text fz="sm" fw={500}>Sort Keyword</Text>
                    <Input size="sm" onChange={handleChange} name="assignee" type="text" placeholder="difficulty"
                    // TODO: update state
                    // TODO: counter
                    />
                  </label>

                  <label>
                    <Button size="sm" type="submit">Show New Settings</Button>
                  </label>
                </Stack>
              </form>
            </Paper>
          </div>
          <div>
            <Paper padding="lg" radius="sm" withBorder p="lg">

              <form onSubmit={handleSubmit}>
                <Stack spacing="xs">
                  <Title order={4}>Updated Settings</Title>
                  <Space h="xs" />
                  <Text fz="md" >{hideCompleted ? 'Show Completed ToDos' : 'Hide Completed ToDos'}</Text>

                  <Text fz="md" >Items Per Page: {itemsPerScreen}</Text>


                  <label>
                    <Text fz="md">Sort Keyword: {sortBy}</Text>
                  </label>

                </Stack>
              </form>
            </Paper>
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Todo;
