const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flex: 1,
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  'contentShift-left': {
    marginLeft: 0,
  },
});

export default styles;
