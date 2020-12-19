import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/theme';
import Header from './components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!

    </ThemeProvider>
  );
}

export default App;
