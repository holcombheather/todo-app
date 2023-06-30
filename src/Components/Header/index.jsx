import React from 'react';
import { createStyles, Group, Space, Navbar, Flex, Grid } from '@mantine/core';
import { Link } from 'react-router-dom';
import LoginComp from '../Login/index';

const useStyles = createStyles((theme) => ({
  mainHeader: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
  }
}))

function Header() {
  const { classes } = useStyles();

  return (
    <header>
      <Navbar className={classes.mainHeader}>
        <Grid align="center">
          <Grid.Col span={4}>
            <Group>
              <Space h="md" />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <Link to="/settings" style={{ color: 'inherit', textDecoration: 'none' }}>Settings</Link>
            </Group>
          </Grid.Col>
          <Grid.Col span="auto" justify="end">
            <Flex justify="flex-end">
              <LoginComp />
            </Flex>
          </Grid.Col>
        </Grid>
      </Navbar>
    </header>
  );
}

export default Header;
