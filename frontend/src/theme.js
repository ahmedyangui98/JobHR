// theme.js (for Material-UI version 4 or below)
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3', // Your primary color
    },
    secondary: {
      main: '#FF5722', // Your secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
  },
  // Add more theme options as needed
});

export default theme;
