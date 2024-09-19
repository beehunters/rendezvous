import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#432361', // This is the default primary color
      light: '#9B51E0', 
      dark: '#783EAD', 
    },
    secondary: {
      main: '#ff4081', 
    },
    

  },
  typography: {
    fontFamily: '"gilroy", serif', 
    
  },
});

export default theme;
