import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Container, Group, Pagination, Card, Text, Badge, Space, CloseButton, UnstyledButton } from '@mantine/core';
import Auth from '../Auth/index';
import { Switch, Case, Default } from 'react-if';



const List = ({ list, toggleComplete, toggleIncomplete, deleteItem }) => {
  const { itemsPerScreen, hideCompleted, sortBy } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(itemsPerScreen, hideCompleted, sortBy);

  const filteredList = hideCompleted ? list : list.filter(item => !item.complete);
  const totalPage = Math.ceil(filteredList.length / itemsPerScreen);

  const startIndex = (currentPage - 1) * itemsPerScreen;
  const endIndex = startIndex + itemsPerScreen;
  const displayedList = filteredList.slice(startIndex, endIndex);

  // const [displayedList, setDisplayedList] = useState([]);

  // useEffect(() => {
  //   const filteredList = hideCompleted ? list : list.filter(item => !item.complete);
  //   filteredList.sort((a, b) => {
  //     if (sortBy === 'difficulty') {
  //       return a.difficulty - b.difficulty;
  //     }
  //     // Add more sort conditions here if needed
  //     return 0;
  //   });

  //   const totalPage = Math.ceil(filteredList.length / itemsPerScreen);
  //   const startIndex = (currentPage - 1) * itemsPerScreen;
  //   const endIndex = startIndex + itemsPerScreen;

  //   setDisplayedList(filteredList.slice(startIndex, endIndex));
  // }, [currentPage, itemsPerScreen, hideCompleted, sortBy, list]);

  return (
    <>
      <Container px="sm" spacing={10}>
        {displayedList.map(item => (
          <>
            <Card key={item.id} padding="lg" radius="sm" withBorder shadow="lg" >
              <Card.Section withBorder px="xs">
                <Group position="apart">
                  <div>
                    <Group>
                      <Auth capability="update">
                      <Switch>
                        <Case condition={item.complete} >
                          <UnstyledButton>
                          
                          <Badge onClick={() => toggleIncomplete(item.id)} color="red" variant="filled" title="Mark Incomplete">Complete</Badge>
                          </UnstyledButton>
                        </Case>
                        <Default>
                          <Badge color="green" variant="filled"
                          onClick={() => toggleComplete(item.id)}
                          >Pending</Badge>
                        </Default>
                      </Switch>
                      </Auth>
                      <Text fz="md">{item.assignee}</Text>
                    </Group>
                  </div>
                  <Auth capability="delete">
                    <CloseButton onClick={() => deleteItem(item.id)} title="Delete ToDo Item" size="sm" justify="end" />
                  </Auth>
                </Group>
              </Card.Section>
              <Card.Section inheritPadding py="xs">
                <Text fz="md" mt="xs">{item.text}</Text>
                <Text align="right"><small>Difficulty: {item.difficulty}</small></Text>
              </Card.Section>
            </Card>
            <Space h="md" />
          </>
        ))}
        <Pagination.Root withEdges value={currentPage} total={totalPage} onChange={setCurrentPage}>
          <Group spacing={10} position="left">
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
          </Group>
        </Pagination.Root>
      </Container>
    </>
  );
};

export default List;