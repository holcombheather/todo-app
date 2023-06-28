import React from 'react';
import { createStyles, Navbar, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navbar: {
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
        <Navbar className={classes.navbar}>
          <Text>Home</Text>
        </Navbar>
    </header>
  );
}

export default Header;
