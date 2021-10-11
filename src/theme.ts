import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    h1: {
      fontFamily: 'Farro, sans-serif'
    },
    h2: {
      fontFamily: 'Farro, sans-serif'
    },
    h3: {
      fontFamily: 'Farro, sans-serif'
    },
    h4: {
      fontFamily: 'Farro, sans-serif'
    },
    h5: {
      fontFamily: 'Farro, sans-serif'
    },
    h6: {
      fontFamily: 'Farro, sans-serif'
    },
    fontFamily: [
      'Amiko',
      'sans-serif',
    ].join(','),
    fontSize: 16,
  },
  palette: {
    text: {
      primary: `hsl(0, 0%, 20%)`,
      secondary: `hsl(358, 84%, 52%)`,
    },
    divider: `hsl(358, 84%, 52%)`,
    primary: {
      main: 'hsl(358, 84%, 52%)',
    },
    secondary: {
      main: 'hsl(0, 0%, 20%)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
