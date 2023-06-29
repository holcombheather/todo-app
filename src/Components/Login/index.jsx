import { useContext, useState } from 'react';
import { createStyles, Button, TextInput, PasswordInput, Group } from '@mantine/core';
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
  const { setUsername, setPassword } = useContext(AuthContext);

  return (
    <form 
      className={classes.login} 
      // onSubmit={handleSubmit}
    >
      <Group>

        <TextInput 
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
         />

        <PasswordInput 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />

      <Button type="submit" color="dark">Login</Button>
      
      <Button align="right" color="red">Log Out</Button>  
      </Group>

    </form>
  )
};

export default LoginComp;


