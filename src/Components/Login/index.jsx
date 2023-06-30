import { useContext, useState } from 'react';
import { createStyles, Button, TextInput, Space, Group } from '@mantine/core';
import { AuthContext } from '../../Context/Auth';

const useStyles = createStyles((theme) => ({
  login: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
  }
}));

function LoginComp() {
  const { classes } = useStyles();
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('isLoggedIn', isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    // addStaff({name, position});
    e.target.reset();
  }

  return (
    <form 
      className={classes.login} 
      onSubmit={handleSubmit}
    >
      <Group>

        <TextInput 
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
         />

        <TextInput
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />

      <Button type="submit" color="dark">Login</Button>
      <Space h="lg" />

      
      <Button align="right" color="red" onClick={logout}>Log Out</Button>  
      </Group>

    </form>
  )
};

export default LoginComp;


