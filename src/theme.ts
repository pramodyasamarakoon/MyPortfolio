import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8a4af3', // Blue color
    },
    secondary: {
      main: '#494949', 
      dark: '#1C1C1C', // Black color
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#ffffff', // White text color
      secondary: '#e0e0e0', // Light grey text color for secondary text
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
    },
  },
});

export default theme;
