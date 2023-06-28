import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    textAlign: 'right',
    width: '80%',
    margin: 'auto',
    padding: '2rem'
  }
}));

function Footer() {
  const { classes } = useStyles();

  return (
  <footer className={classes.footer}>
    &copy; 2023 Code Fellows
    </footer>
  )
}

export default Footer;
