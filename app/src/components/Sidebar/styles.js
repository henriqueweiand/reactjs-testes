const drawerWidth = 240;
const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
    position: 'relative',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.grey[100]),
  },
});

export { styles, drawerWidth };
