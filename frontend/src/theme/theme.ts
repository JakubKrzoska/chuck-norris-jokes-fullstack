import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#5B64B4' }, 
    secondary: { main: '#E84A8F' }, 
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
});

export default theme;