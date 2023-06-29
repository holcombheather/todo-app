import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Container, Group, Pagination, Card, Text, Badge, Space, CloseButton } from '@mantine/core';


const List = ({ list, toggleComplete }) => {
  const { itemsPerScreen, hideCompleted, sort } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(itemsPerScreen, hideCompleted, sort);

  const filteredList = hideCompleted ? list.filter(item => !item.complete) : list;
   const totalPage = Math.ceil(filteredList.length / itemsPerScreen); 
   
   const startIndex = (currentPage - 1) * itemsPerScreen;
  const endIndex = startIndex + itemsPerScreen;
  const displayedList = filteredList.slice(startIndex, endIndex);


  return (
    <>
      <Container px="sm" spacing={10}>
        {displayedList.map(item => (
          <>
          <Card key={item.id} padding="lg" radius="sm" withBorder shadow="lg" >
            <Card.Section withBorder px="xs">
              <Group padding="sm">
                <Badge color="green" variant="filled" onClick={() => toggleComplete(item.id)}>Pending</Badge>
                <Text fz="md">{item.assignee}</Text>
                <CloseButton title="Close popover" size="sm"/>
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