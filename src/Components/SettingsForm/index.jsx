import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Header, SimpleGrid, createStyles, Group, Container, Space, Stack, Paper, Text, TextInput,  Button, Title, Switch, NumberInput } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { When } from 'react-if';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[4],
    padding: theme.spacing.md,
    color: theme.colors.gray[0],
  }
}));

function SettingsForm() {
  const { classes } = useStyles();
  const [show, setShow] = useState(false);
  const { 
    itemsPerScreen, 
    setItemsPerScreen, 
    hideCompleted, 
    setHideCompleted, 
    sortBy, 
    setSortBy, 
    saveLocally, 
  } = useContext(SettingsContext);

  console.log('sortBy:', {sortBy}, {hideCompleted}, {itemsPerScreen});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    saveLocally();
    setShow(true);
    event.target.reset();

  }

  return (
    <>
      <Container>
        <Space h="md" />
        <header data-testid="todo-header">
          <Header className={classes.header}>
            <Title order={3} data-testid="todo-h1"><IconSettings /> Manage Settings</Title>
          </Header>
        </header>
        <Space h="md" />
        
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg">
          
          <div>
            <Paper padding="lg" radius="sm" withBorder p="md">
              <form onSubmit={handleSubmit}>

                <Stack spacing="xs">
                  <Title order={4}>Update Settings</Title>

                  <Group>
                    <Switch
                      checked={hideCompleted} 
                      onChange={(event) => setHideCompleted(event.currentTarget.checked)}
                    />
                    <Text fz="sm" >Show Completed ToDos</Text>
                  </Group>

                  <label>
                    <Text fz="sm" fw={500}>Items Per Page</Text>
                    <NumberInput size="sm" 
                      value={itemsPerScreen}
                      onChange={setItemsPerScreen} 
                    />
                  </label>

                  <label>
                    <Text fz="sm" fw={500}>Sort Keyword</Text>
                    <TextInput 
                      size="sm" 
                      onChange={(e) => setSortBy(e.currentTarget.value)}
                      type="text"
                      placeholder={sortBy}
                    />
                  </label>

                  <label>
                    <Button size="sm" type="submit">Show New Settings</Button>
                  </label>


                </Stack>
              </form>
            </Paper>
          </div>

          {/* // ! RESULTS  */}
          <div>
            <When condition={show}>
            <Paper padding="lg" radius="sm" withBorder p="lg">
                <Stack spacing="xs">
                  <Title order={4}>Updated Settings</Title>
                  <Space h="xs" />

                  <Text fz="md" >{hideCompleted ? 'Show' : 'Hide'} Completed Todos</Text>
                  <Text fz="md" >Items Per Page: {itemsPerScreen}</Text>
                  <Text fz="md">Sort Keyword: {sortBy}</Text>
                  
                </Stack>
            </Paper>
            </When>
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default SettingsForm;
