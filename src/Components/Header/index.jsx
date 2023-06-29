import React from 'react';
import { useContext, useState } from 'react';
import { createStyles, Group, Navbar, Button, Flex, Grid } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth';
import LoginComp from '../Login/index';

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

  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('', isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    // addStaff({name, position});
    e.target.reset();
  }

  return (
    <header>
        <Navbar className={classes.mainHeader}>
          <Grid>
          <Grid.Col span={4}>

          <Group>
         <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <Link to="/settings" style={{ color: 'inherit', textDecoration: 'none' }}>Settings</Link>

                        </Group>  
          </Grid.Col>

          <Grid.Col span="auto" justify="end">

        <Flex justify="flex-end">

                        {/* <form onSubmit={handleSubmit}>
                      <label> username:
                        <input onChange={(e) => setUsername(e.target.value)} />
                      </label>
                      <label> password:
                        <input onChange={(e) => setPassword(e.target.value)} />
                      </label>
                      <button type="submit">Login</button>
                    </form> */}
        <LoginComp handleSubmit={handleSubmit} />
          </Flex>
          </Grid.Col>
          </Grid>
        </Navbar>
</header>
  );
}

export default Header;
