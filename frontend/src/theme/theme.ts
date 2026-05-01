import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#5B64B4' }, 
    secondary: { main: '#E84A8F', light: '#E5B4C6' }, 
    background: {
      default: '#5B64B4', 
      paper: '#FDFDFA',   
    },
    text: {
      primary: '#2C2C2C', 
      secondary: '#737172', 
    },
  },
  typography: {
    fontFamily: '"Josefin Slab", serif', 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 500, 
          textTransform: 'none', 
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
          '&.Mui-focused': {
            color: '#E5B4C6', 
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': { borderColor: '#E5B4C6 !important' },
        },
      },
    },
  },
});

export default theme;