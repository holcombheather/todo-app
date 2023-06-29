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

const SettingsForm = () => {
  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const { handleChange, handleSubmit } = useForm(defaultValues);

  const { itemsPerScreen, setItemsPerScreen, hideCompleted, setHideCompleted, sortBy, setSortBy } = useContext(SettingsContext);


  const [checked, setChecked] = useState(false);

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
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg">
          <div>
            <Paper padding="lg" radius="sm" withBorder p="md">

              <form 
              onSubmit={handleSubmit}
               >
                <Stack spacing="xs">
                  <Title order={4}>Update Settings</Title>

                  <Group>
                    <Switch
                    // TODO: update state
                    checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} 
                    />
                    <Text fz="sm" >Show Completed ToDos</Text>
                  </Group>

                  <label>
                    <Text fz="sm" fw={500}>Items Per Page</Text>
                    <NumberInput size="sm" 
                    // onChange={value => setItemsPerScreen(value)} 
                    name="itemsPerScreen" placeholder="20" />
                  </label>

                  <label>
                    <Text fz="sm" fw={500}>Sort Keyword</Text>
                    <Input size="sm" 
                    // onChange={handleChange} 
                    name="assignee" type="text" placeholder="difficulty"
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
                <Stack spacing="xs">
                  <Title order={4}>Updated Settings</Title>
                  <Space h="xs" />
                  <Text fz="md" >
                    {/* {hideCompleted ? 'Show Completed ToDos' : 'Hide Completed ToDos'} */}
                    </Text>

                  <Text fz="md" >Items Per Page: 
                  {/* {itemsPerScreen} */}
                  </Text>


                  <label>
                    <Text fz="md">Sort Keyword: 
                    {/* {sortBy} */}
                    </Text>
                  </label>

                </Stack>
            </Paper>
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default SettingsForm;
