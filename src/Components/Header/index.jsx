import React from 'react';
import { createStyles, Text, Group, Navbar, Button, Flex } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  mainHeader: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
    padding: theme.spacing.md,
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
  }
}))

function Header() {
  const { classes } = useStyles();

  return (
    <header>
        <Navbar className={classes.mainHeader}>
          <Group>
         <Text>Home</Text>
          <Text>Settings</Text>
          <Flex justify="flex-end">
            <Button align="right" color="red">Log Out</Button>  
          </Flex>
          </Group>
        </Navbar>
    </header>
  );
}

export default Header;
