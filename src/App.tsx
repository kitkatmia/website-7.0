import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#000000', // Set the default background color to black
      },
      // You can also set other palette colors here if needed
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;
