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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#E5B4C6 !important', 
          },
          '&:hover fieldset': {
            borderColor: '#E5B4C6 !important', 
          },
          '&.Mui-focused fieldset': {
            borderColor: '#E5B4C6 !important', 
            borderWidth: '1px', 
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#E5B4C6', //[cite: 1]
          },
        },
      },
    },
  },
});

export default theme;